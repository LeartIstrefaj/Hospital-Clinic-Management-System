using System;

namespace HMS.Models
{
    public class ListSurgery
    {
        public int SurgeryID { get; set; }
        public string Patient { get; set; }
        public string SurgeryName { get; set; }
        public string Department { get; set; }

        public int Zone { get; set; }
        public string Hall { get; set; }
        public string Doctor { get; set; }
        public string Nurse { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
