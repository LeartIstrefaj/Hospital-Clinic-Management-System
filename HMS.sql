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


select * from users