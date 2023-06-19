using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;
using System;

namespace HMS.Models
{
    [BsonIgnoreExtraElements]
    public class Appointment
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("patientName")]
        public string PatientName { get; set; } = string.Empty;

        [BsonElement("date")]
        [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
        public DateTime Date { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("doctorName")]
        public string DoctorName { get; set; }

        [BsonElement("roomNo")]
        public int RoomNo { get; set; }
    }
}
