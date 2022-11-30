create database dunklab;

use dunklab;

create table usuario (
idUsuario int primary key auto_increment, 
nome varchar(45), 
email varchar(45), 
senha varchar(45));

create table login(
idLogin int primary key auto_increment,
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario),
email varchar(45),
senha varchar(45));

create table cruzadinha (
idCruzadinha int primary key auto_increment,
acertos int, 
erros int, 
tentativas int, 
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario));

select * from cruzadinha;
select * from usuario;

select sum(acertos), sum(erros), sum(tentativas) from cruzadinha;

select sum(tentativas) as somaid1, sum(acertos) as acertosid1, nome from cruzadinha join usuario on fkUsuario = idUsuario where fkUsuario = 1;
select sum(tentativas) as somaid2, nome from cruzadinha join usuario on fkUsuario = idUsuario where fkUsuario = 2;
select sum(tentativas) as somaid3, nome from cruzadinha join usuario on fkUsuario = idUsuario where fkUsuario = 3;