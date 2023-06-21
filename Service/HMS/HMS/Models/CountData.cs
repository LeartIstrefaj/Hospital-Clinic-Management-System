namespace HMS.Models
{
    public class CountData
    {
        public int DoctorCount { get; set; }
        public int NurseCount { get; internal set; }
        public int PatientCount { get; internal set; }
        public int DepartmentCount { get; internal set; }
    }

}
