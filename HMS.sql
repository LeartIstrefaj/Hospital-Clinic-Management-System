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


