create table users(
UserID int identity(1,1),
FullName varchar(100),
Username varchar(50),
Email varchar(100),
Password varchar(100),
NrTel int,
Role varchar(100),
DateCreated date
);


create table Departments(
DepID int identity(1,1),
DepName varchar(200)
);

create table Roles(
RoleID int identity(1,1),
Role varchar(200)
);

create table ListSurgery(
SurgeryID int identity(1,1),
Patient varchar(200),
SurgeryName varchar(200),
Department varchar(100),
Zone int,
Hall int,
Doctor varchar(100),
Nurse varchar(100),
DateCreated date
);

drop table ListSurgery



create table Artikulli(
AtikulliID int identity(1,1),
Name varchar(200),
Title varchar(200),
);


create table Komenti(
KomentiID int identity(1,1),
Comment varchar(200),
Title varchar(200),
);
