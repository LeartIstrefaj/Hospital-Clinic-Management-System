namespace HMS.Models
{
    public class AppointmentDatabaseSettings : IAppointmentDatabaseSettings
    {
        public string AppointmentHMSCollectionName { get; set; } = string.Empty;
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
    }
}
