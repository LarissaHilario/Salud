Create database salud;
use salud;
drop database salud;
	create table if not exists pacientes(
	id_paciente int not null auto_increment,
	usuario varchar(255) not null,
	email varchar(255) not null,
	pass varchar(255) not null,
	primary key(id_paciente)
	);
    insert into pacientes (id_paciente,usuario,email,pass)
values 
	(1,"Larissa","lari@gmail.com","onedirection"),
	(2,"Marcela","marce@gmail.com","cielo34#");
    
    create table if not exists citas(
    id_cita int not null auto_increment PRIMARY KEY,
    id_medico int not null,
    nombre varchar(255 )not null, 
    ap_p varchar(255) not null,
    ap_m varchar(255) not null,
    sexo varchar(30) not null, 
    nacimiento date not null,
    telefono varchar(40) not null,
    email varchar(40) not null,
    horario varchar(255) not null,
    fecha date not null,
    foreign key (id_medico) references doctores (id_medico)
    );
    
    
    
	create table if not exists paciente_cita(
	id int not null auto_increment PRIMARY KEY,
    id_paciente int not null,
    id_cita int not null,
	foreign key (id_paciente) references pacientes (id_paciente),
    foreign key (id_cita) references citas (id_cita)
    );
    
	create table if not exists administradores(
    id_administrador int not null auto_increment,
	user varchar(255) not null,
    email varchar(255)not null,
	password varchar(255) not null,
    primary key(id_administrador)
	);

insert into administradores (id_administrador,user,email,password)
values 
	(10,"admi1","admi1@gmail.com","salud+"),
	(2,"admi2","admi2@gmail.com","salud+");

create table if not exists doctores(
	id_medico int not null auto_increment,
	nombre varchar(255) not null,
	apellidos varchar(255) not null,
	email varchar(255) not null,
	direccion varchar(255)not null,
	tel varchar(255) not null,
    esp varchar(50) not null,
    info varchar(300) not null,
    image varchar(300) not null,
    primary key(id_medico));
    
    insert into doctores (id_medico,nombre,apellidos,email,direccion,tel,esp,info,image)
values 
	(1,"María","Robles","maria@gmail.com","Los Sauces #1200","9618649536","Odontología","La doctora María Robles está graduada de la Universidad Autónoma de Chiapas en la especialidad odontología. Es una de las mejores doctoras del estado.","C:fakepathdoctor-7.png"),
	(2,"Alexis","Padrón","alexis@gmail.com","Crespo #700","9617413698","Psicología","El doctor Alexis Padrón está graduado de la Universidad Autónoma de Chiapas en la especialidad psicología. Es uno de los mejores doctores del estado.","C:fakepathdoctor-3.png"),
    (3,"Ana","Morales","ana@gmail.com","Independencia #720","9614179512","Cardiología","La doctora Ana Morales, es una especialista de confianza, cuenta con más de 20 años de trayectoria médica.","C:fakepathdoctor-5.png"),
    (4,"Javier","Fernández","javier@gmail.com","Laureles #215","9611236589","Otorrinolaringología","El doctor Javier Fernández está graduado de la Universidad Autónoma de Chiapas en la especialidad de otorrinolaringología.","C:fakepathdoctor-4.png"),
    (5,"Genaro","Cuesta","genaro@gmail.com","Reforma #468","9612583473","Neurocirujano","El doctor Genaro Cuesta es uno de los neurocirujanos mejor capacitados a nivel nacional.","C:fakepathdoctor-1.png"),
    (6,"Diana Soto","Robles","diana@gmail.com","Belisario Domínguez #300","9616500214","Nutriólogo","La doctora Diana Soto, está especializada en dietas veganas y dietas basadas en plantas.","C:fakepathdoctor-2.png"),
    (7,"Manuel","Alegría","manuel@gmail.com","Santa Rosa #1560","9617438516","Dermatología","El doctor Manuel Alegría se especializa en Detección precoz del cáncer de piel, Enfermedades del cabello y de las uñas, Biopsias cutáneas y Dermatología cosmética","C:fakepathdoctor-main.png"),
    (8,"Fabiola","Castillo","fabiola@gmail.com","San Felipe #937","9610158851","Nefrología","La doctora Fabiola Castillo está graduada de la Universidad Autónoma de Chiapas en la especialidad nefrología. Es una de las mejores doctoras del estado.","C:fakepathdoctor-8.png");
 

	create table direccion (
    cp int not null, 
    calle varchar(40) not null,
    num int not null,
    paciente_id int not null,
    foreign key (paciente_id) references pacientes (id_paciente)
    );

drop database salud;

drop table direccion;



create view consulta as
select id_paciente,  usuario, email from pacientes;

create view medico_consulta as 
select id_medico, nombre, apellidos  from doctores;

create view cita_consulta as 
select id_cita, fecha, horario from citas;

drop database salud;
