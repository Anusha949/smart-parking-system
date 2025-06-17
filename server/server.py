from flask import Flask, jsonify, request
from flask_cors import CORS  # <-- add this if not already

app = Flask(__name__)
CORS(app)  # allow requests from client

# Dummy parking data
parking_data = [
    {"id": 1, "lat": 17.387, "lon": 78.487, "status": "Available"},
    {"id": 2, "lat": 17.386, "lon": 78.488, "status": "Occupied"},
]

@app.route('/api/parking', methods=['GET'])
def get_parking_data():
    return jsonify(parking_data)

@app.route('/api/parking/<int:spot_id>', methods=['POST'])
def reserve_parking(spot_id):
    for spot in parking_data:
        if spot["id"] == spot_id:
            spot["status"] = "Occupied"
            return jsonify({"message": f"Spot {spot_id} reserved."}), 200
    return jsonify({"error": "Spot not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
