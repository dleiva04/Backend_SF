create database SF_Test;
use SF_Test;

create table `users`(
	Id_User int(8) primary key auto_increment ,
	Name_User varchar(50) ,
	Password_User varchar(100) ,
	Email_User varchar(100) ,
	Phone_User varchar(8) null,
	Created_At date ,
	Last_Edit date 
);
create table `categories`(

	Id_Category int(8) primary key	auto_increment ,
	Name_Category varchar(50) 
);

create table `products`(
	Id_Product int(8) primary key auto_increment ,
     Id_Category int(8) ,
	Name_Product varchar(50) ,
	Id_Store varchar(50) ,
	Des_Product varchar(100) ,
	FOREIGN KEY ( Id_Category ) REFERENCES `categories` ( Id_Category )
);

create table `product_size`(

	Id_ProductSize int(8) primary key auto_increment ,
	Id_Product int(8) ,
	Size_S_Product int(8) ,
	Size_M_Product int(8) ,
	Size_L_Product int(8) ,
	Size_XL_Product int(8) ,

	FOREIGN KEY ( Id_Product ) REFERENCES `products` ( Id_Product )
);

create table `carts`(

	Id_Cart int(8) primary key auto_increment ,
	Id_User int(8) ,
	Id_Product int(8) ,
	Size_Id int(8) ,
	Quantity_Prod int(3) ,
	Finished bit,

	FOREIGN KEY ( Id_User ) REFERENCES `users` ( Id_User ),
	FOREIGN KEY ( Id_Product ) REFERENCES `products` ( Id_Product )
);

create table `saved_carts`(

	Id_Saved_Cart int(8) primary key auto_increment ,
	Id_User int(8) ,
	Id_Cart int(8) ,
	Date_Cart timestamp,

	FOREIGN KEY ( Id_User ) REFERENCES `users` ( Id_User ),
	FOREIGN KEY ( Id_Cart ) REFERENCES `carts` ( Id_Cart )

);

CREATE TABLE `admin`(
	
	Id_Admin INT(8) PRIMARY KEY auto_increment,
	User_Admin VARCHAR(20),
	Pass VARCHAR(50),
	Role_Admin INT(8)
	
	);
	
CREATE TABLE `coupon_codes`(
	
	Id_Coupon INT(8) PRIMARY KEY AUTO_INCREMENT,
	Code_Coupon VARCHAR(30),
	State_Coupon bit,
	One_Client bit,
	Every_Body bit
	
	);

CREATE TABLE `coupon_code_clients`(

    Id_Coupon_Client int(8) primary key auto_increment,
    Id_Coupon int(8),
    Id_User int(8),

    FOREIGN KEY ( Id_Coupon ) REFERENCES `coupon_codes` ( Id_Coupon ),
	FOREIGN KEY ( Id_User ) REFERENCES `users` ( Id_User )
);

CREATE TABLE `keywords`(

    Id_Keyword int(8) primary key auto_increment,
    Keyword varchar(50)
);