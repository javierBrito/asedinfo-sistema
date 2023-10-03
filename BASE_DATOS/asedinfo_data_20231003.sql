-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2023 a las 22:45:37
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `asedinfo_data`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aho_socio`
--

CREATE TABLE `aho_socio` (
  `codigo` int(11) NOT NULL,
  `tipo_socio` varchar(150) DEFAULT NULL,
  `fecha_inicio` datetime(6) DEFAULT NULL,
  `cod_persona` int(11) NOT NULL,
  `estado` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `aho_socio`
--

INSERT INTO `aho_socio` (`codigo`, `tipo_socio`, `fecha_inicio`, `cod_persona`, `estado`) VALUES
(1, 'tipo socio', '2023-08-21 00:00:00.000000', 1, 'A'),
(2, 'especial', '2023-08-28 00:00:00.000000', 2, 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_modulo`
--

CREATE TABLE `cat_modulo` (
  `codigo` int(11) NOT NULL,
  `nemonico` varchar(3) NOT NULL,
  `descripcion` varchar(125) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `fecha_registra` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_modulo`
--

INSERT INTO `cat_modulo` (`codigo`, `nemonico`, `descripcion`, `estado`, `fecha_registra`) VALUES
(1, 'AHO', 'MODULO DE AHORROS', 'A', '2023-09-12'),
(2, 'VEN', 'MODULO DE VENTAS', 'A', '2023-09-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_operacion`
--

CREATE TABLE `cat_operacion` (
  `codigo` int(11) NOT NULL,
  `cod_modulo` int(11) NOT NULL,
  `nemonico` varchar(3) NOT NULL,
  `descripcion` varchar(125) NOT NULL,
  `estado` varchar(1) NOT NULL,
  `fecha_registra` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_operacion`
--

INSERT INTO `cat_operacion` (`codigo`, `cod_modulo`, `nemonico`, `descripcion`, `estado`, `fecha_registra`) VALUES
(1, 1, 'CRE', 'CREDITO', 'A', '2023-09-13'),
(2, 1, 'DEB', 'DEBITO', 'A', '2023-09-13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_persona`
--

CREATE TABLE `cat_persona` (
  `codigo` int(11) NOT NULL,
  `identificacion` varchar(25) NOT NULL,
  `cedula` varchar(15) DEFAULT NULL,
  `nombres` varchar(150) NOT NULL,
  `apellidos` varchar(150) NOT NULL,
  `fecha_nacimiento` datetime(6) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `correo` varchar(50) NOT NULL,
  `celular` varchar(15) NOT NULL,
  `estado` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_persona`
--

INSERT INTO `cat_persona` (`codigo`, `identificacion`, `cedula`, `nombres`, `apellidos`, `fecha_nacimiento`, `direccion`, `correo`, `celular`, `estado`) VALUES
(1, '1707025746', NULL, 'VICENTE JAVIER', 'BRITO ARIAS', '1961-05-12 00:00:00.000000', 'venezuela y san nicolas Terracota B casa 30', 'vjbritoa@hotmail.com', '0992752367', 'A'),
(2, '1718092487', NULL, 'DARIO XAVIER', 'BRITO LÓPEZ', '1989-08-19 00:00:00.000000', 'VENEZUELA Y VIÑEDOS TERRACOTA B CASA 30', 'dxbritol@gmail.com', '0995038551', 'A'),
(3, '1721498838', NULL, 'DAVID SANTIAGO', 'BRITO LÓPEZ', '1993-01-13 01:00:00.000000', 'VENEZUELA Y VIÑEDOS', 'davidsbritol@gmail.com', '0998069137', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_producto`
--

CREATE TABLE `cat_producto` (
  `codigo` int(11) NOT NULL,
  `cod_marca` int(6) DEFAULT NULL,
  `cod_unidad` int(6) DEFAULT NULL,
  `descripcion` varchar(125) NOT NULL,
  `precio_compra` float DEFAULT NULL,
  `precio_costo` float NOT NULL,
  `precio_mayoreo` float DEFAULT NULL,
  `precio_minoreo` float DEFAULT NULL,
  `aplica_iva` int(1) DEFAULT 1,
  `num_existencia_actual` int(4) NOT NULL,
  `num_existencia_minima` int(4) DEFAULT NULL,
  `imagen` blob DEFAULT NULL,
  `nombre_imagen` varchar(100) DEFAULT NULL,
  `path_imagen` varchar(100) DEFAULT NULL,
  `estado` varchar(1) NOT NULL,
  `fecha_registra` date DEFAULT NULL,
  `cod_modulo` int(6) NOT NULL,
  `cod_categoria` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_producto`
--

INSERT INTO `cat_producto` (`codigo`, `cod_marca`, `cod_unidad`, `descripcion`, `precio_compra`, `precio_costo`, `precio_mayoreo`, `precio_minoreo`, `aplica_iva`, `num_existencia_actual`, `num_existencia_minima`, `imagen`, `nombre_imagen`, `path_imagen`, `estado`, `fecha_registra`, `cod_modulo`, `cod_categoria`) VALUES
(1, NULL, NULL, 'NETFLIX', 0, 10.25, 0, 0, 0, 12, 0, NULL, NULL, NULL, 'A', '2023-08-23', 2, NULL),
(2, NULL, NULL, 'ESET', 0, 9.95, 0, 0, 0, 5, 0, NULL, NULL, NULL, 'A', '2023-08-24', 2, NULL),
(3, NULL, NULL, 'E', 0, 5, 0, 0, 0, 4, 0, NULL, NULL, NULL, 'A', '2023-09-14', 2, NULL),
(4, NULL, NULL, 'DEPOSITO', 0, 1, 0, 0, 0, 1, 0, NULL, NULL, NULL, 'A', '2023-09-12', 1, NULL),
(5, NULL, NULL, 'PRUEBA ITEM', 0, 9.5, 0, 0, 0, 12, 0, NULL, NULL, NULL, 'A', '2023-09-19', 2, NULL),
(6, NULL, NULL, 'AUDIFONOS', 0, 4.5, 0, 0, 0, 5, 0, NULL, NULL, NULL, 'A', '2023-09-20', 2, NULL),
(7, NULL, NULL, 'AUDIFONOS', 0, 4.5, 0, 0, 0, 5, 0, NULL, NULL, NULL, 'A', '2023-09-20', 2, NULL),
(8, NULL, NULL, 'AURICULARES', 0, 5.5, 0, 0, 0, 4, 0, NULL, NULL, NULL, 'A', '2023-09-20', 2, NULL),
(9, NULL, NULL, 'NETFLIX MEGA', 0, 8.9, 0, 0, 0, 2, 0, NULL, NULL, NULL, 'A', '2023-09-20', 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_transaccion`
--

CREATE TABLE `cat_transaccion` (
  `codigo` int(11) NOT NULL,
  `cod_cliente` int(6) NOT NULL,
  `cod_producto` int(6) DEFAULT NULL,
  `descripcion` varchar(125) NOT NULL,
  `precio` float DEFAULT NULL,
  `precio_promocion` float DEFAULT NULL,
  `num_producto` int(4) NOT NULL,
  `num_producto_adicional` int(4) DEFAULT NULL,
  `monto` float DEFAULT NULL,
  `monto_descuento` float DEFAULT NULL,
  `aplica_iva` int(1) DEFAULT 1,
  `estado` varchar(1) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date DEFAULT NULL,
  `fecha_caduca` date DEFAULT NULL,
  `fecha_registra` date NOT NULL,
  `num_mes` int(4) DEFAULT NULL,
  `cod_modulo` int(6) NOT NULL,
  `cod_operacion` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_transaccion`
--

INSERT INTO `cat_transaccion` (`codigo`, `cod_cliente`, `cod_producto`, `descripcion`, `precio`, `precio_promocion`, `num_producto`, `num_producto_adicional`, `monto`, `monto_descuento`, `aplica_iva`, `estado`, `fecha_inicio`, `fecha_fin`, `fecha_caduca`, `fecha_registra`, `num_mes`, `cod_modulo`, `cod_operacion`) VALUES
(11, 1, 1, 'TRANSACCION JB', 4, NULL, 1, NULL, NULL, NULL, 0, 'A', '2023-09-14', '2023-10-03', NULL, '2023-09-15', 0, 2, 1),
(12, 1, 2, 'TRANSACCION JB HOY', 9.95, NULL, 1, NULL, NULL, NULL, 0, 'A', '2023-09-21', '2023-10-04', NULL, '2023-09-21', 0, 2, 1),
(13, 2, 2, 'PROMO TRES MESES', 9.95, NULL, 1, NULL, NULL, NULL, 0, 'A', '2023-09-21', '2023-12-21', NULL, '2023-09-21', 3, 2, 1),
(14, 3, 1, 'PRUEBA TRANSACCION', 10.25, NULL, 2, NULL, NULL, NULL, 0, 'A', '2023-09-21', '2023-11-21', NULL, '2023-09-21', 2, 2, 1),
(15, 1, 5, 'PRUEBAS TRANS', 9.5, NULL, 2, NULL, NULL, NULL, 0, 'A', '2023-09-21', '2023-10-21', NULL, '2023-09-21', 1, 2, 1),
(16, 1, 6, 'TRANSACCION UNO', 4.5, NULL, 2, NULL, NULL, NULL, 0, 'A', '2023-09-21', '2023-10-21', NULL, '2023-09-21', 1, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_aplicacion`
--

CREATE TABLE `seg_aplicacion` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `prefijo` varchar(3) NOT NULL COMMENT 'TRIAL',
  `nombre` varchar(255) NOT NULL COMMENT 'TRIAL',
  `descripcion` varchar(500) DEFAULT NULL COMMENT 'TRIAL',
  `tipo` varchar(3) NOT NULL COMMENT 'TRIAL',
  `url` varchar(150) DEFAULT NULL COMMENT 'TRIAL',
  `estado` varchar(1) NOT NULL DEFAULT 'A' COMMENT 'TRIAL',
  `est_visualizacion_rpr` varchar(1) DEFAULT 'S' COMMENT 'TRIAL',
  `est_visualizacion_rec` varchar(1) DEFAULT 'S' COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_aplicacion`
--

INSERT INTO `seg_aplicacion` (`codigo`, `prefijo`, `nombre`, `descripcion`, `tipo`, `url`, `estado`, `est_visualizacion_rpr`, `est_visualizacion_rec`) VALUES
(1, 'SEG', 'Seguridades', 'Seguridades MinEduc', '1', '/asedinfo-servicios', 'A', NULL, NULL),
(2, 'VEN', 'VENTAS', 'VENTAS DE PRODUCTOS Y SERVICIOS', '1', '/asedinfo-servicios', 'A', NULL, NULL),
(3, 'AHO', 'AHORROS', 'AHORROS', '1', '/asedinfo-servicios', 'A', NULL, NULL),
(4, 'CAT', 'CATALOGO', 'CATALOGO DE TODOS LOS APLICATIVOS', '1', '/asedinfo-servicios', 'A', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_asignacion_usuario_sede`
--

CREATE TABLE `seg_asignacion_usuario_sede` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `codigo_usuario` int(11) NOT NULL COMMENT 'TRIAL',
  `codigo_sede` int(11) NOT NULL COMMENT 'TRIAL',
  `fecha_asignacion` datetime(6) NOT NULL COMMENT 'TRIAL',
  `fecha_finalizacion` datetime(6) DEFAULT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_clave_usuario`
--

CREATE TABLE `seg_clave_usuario` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `cod_usuario` int(11) NOT NULL COMMENT 'TRIAL',
  `clave` varchar(255) NOT NULL COMMENT 'TRIAL',
  `fecha_inicio` datetime(6) NOT NULL COMMENT 'TRIAL',
  `fecha_fin` datetime(6) DEFAULT NULL COMMENT 'TRIAL',
  `estado` varchar(1) DEFAULT NULL COMMENT 'TRIAL',
  `estado_fin_clave` varchar(1) DEFAULT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_clave_usuario`
--

INSERT INTO `seg_clave_usuario` (`codigo`, `cod_usuario`, `clave`, `fecha_inicio`, `fecha_fin`, `estado`, `estado_fin_clave`) VALUES
(1, 1, '0f3d014eead934bbdbacb62a01dc4831', '2014-08-29 22:58:29.000000', NULL, 'A', NULL),
(14, 1, '0f3d014eead934bbdbacb62a01dc4831', '2023-08-20 12:10:21.601000', NULL, 'A', NULL),
(15, 1, '0f3d014eead934bbdbacb62a01dc4831', '2023-08-20 12:46:28.962000', NULL, 'A', NULL),
(16, 1, '0f3d014eead934bbdbacb62a01dc4831', '2023-08-20 12:46:37.948000', NULL, 'A', NULL),
(17, 7, '0f3d014eead934bbdbacb62a01dc4831', '2023-08-21 10:43:39.864000', NULL, 'A', NULL),
(18, 7, '0f3d014eead934bbdbacb62a01dc4831', '2023-08-21 10:44:17.409000', NULL, 'A', NULL),
(19, 2, '0f3d014eead934bbdbacb62a01dc4831', '2023-08-24 11:35:46.666000', NULL, 'A', NULL),
(20, 3, '0f3d014eead934bbdbacb62a01dc4831', '2023-08-28 10:04:17.822000', NULL, 'A', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_inicio_sesion`
--

CREATE TABLE `seg_inicio_sesion` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `fecha` datetime(6) DEFAULT NULL COMMENT 'TRIAL',
  `ip` varchar(50) DEFAULT NULL COMMENT 'TRIAL',
  `usuario` varchar(10) DEFAULT NULL COMMENT 'TRIAL',
  `prefijo_aplicacion` varchar(3) DEFAULT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_inicio_sesion`
--

INSERT INTO `seg_inicio_sesion` (`codigo`, `fecha`, `ip`, `usuario`, `prefijo_aplicacion`) VALUES
(1, '2023-06-20 00:00:00.000001', '10.2.193.246', '1707025746', 'SEG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_parametro`
--

CREATE TABLE `seg_parametro` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `descripcion` varchar(255) DEFAULT NULL COMMENT 'TRIAL',
  `valor` decimal(10,0) DEFAULT NULL COMMENT 'TRIAL',
  `enumeration` varchar(12) DEFAULT NULL COMMENT 'TRIAL',
  `valor_cadena` varchar(255) DEFAULT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_parametro`
--

INSERT INTO `seg_parametro` (`codigo`, `descripcion`, `valor`, `enumeration`, `valor_cadena`) VALUES
(1, 'Número de días de vigencia para la expiración de la contraseña', 5000, 'CAD_DIAS', NULL),
(2, 'Caducidad masiva de contraseñas', 0, 'CAD_MASIVA', NULL),
(3, 'Cantidad de contraseñas antiguas para validar si se repiten', 5, 'NUM_CLAVES', NULL),
(4, 'Número de días anteriores para recordar la caducidad de una contraseña', 5, 'RECORDATORIO', NULL),
(5, 'Número de días de vigencia del token', 2, 'CAD_TOKEN', NULL),
(6, 'Url de documento de Acuerdo de Responsabilidad', NULL, 'URL_ACUERDO', 'http://www.educacion.gob.ec'),
(7, 'Número mínimo de registros del archivo a procesar para la asignación de roles de usuarios de forma masiva.', 1, 'NUM_MIN_ROL', NULL),
(8, 'Correos notificación asignación masiva de roles', NULL, 'NUM_MAI_ROL', 'monica.bayas@educacion.gob.ec'),
(9, 'Número máximo de Registros a subir en cargas masivas.', 2000, 'MAX_REGISTRO', NULL),
(10, 'Edad Máxima.', 70, 'MAX_EDAD', NULL),
(11, 'Edad Mínima.', 4, 'MIN_EDAD', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_recurso`
--

CREATE TABLE `seg_recurso` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `nombre` varchar(50) NOT NULL COMMENT 'TRIAL',
  `descripcion` varchar(255) DEFAULT NULL COMMENT 'TRIAL',
  `url` varchar(150) NOT NULL COMMENT 'TRIAL',
  `codigo_padre` int(11) DEFAULT NULL COMMENT 'TRIAL',
  `nivel` decimal(1,0) NOT NULL COMMENT 'TRIAL',
  `estado` varchar(1) NOT NULL COMMENT 'TRIAL',
  `codigo_aplicacion` int(11) NOT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_recurso`
--

INSERT INTO `seg_recurso` (`codigo`, `nombre`, `descripcion`, `url`, `codigo_padre`, `nivel`, `estado`, `codigo_aplicacion`) VALUES
(1, 'Seguridad', 'Administración', '#', NULL, 1, 'A', 1),
(2, 'Aplicación', 'Administración de Aplicación', 'pages/seguridad/aplicacion', 1, 2, 'A', 1),
(3, 'Recursos por Rol', 'Asignación de Recursos por Rol', 'pages/seguridad/rolAplicacionRecurso', 1, 2, 'A', 1),
(4, 'Sede', 'Administración de Sede', 'pages/seguridad/sede', 1, 2, 'A', 1),
(5, 'Recurso', 'Administración de Recurso', 'pages/seguridad/recurso', 1, 2, 'A', 1),
(6, 'Rol por Aplicación', 'Administración de Rol por Aplicación', 'pages/seguridad/rolAplicacion', 1, 2, 'A', 1),
(7, 'Usuarios', 'Administración de Usuarios', 'pages/seguridad/usuario', 1, 2, 'A', 1),
(8, 'Usuario Rol Aplicación', 'Usuario por Roly por Aplicación', 'pages/seguridad/usuarioRolAplicacion', 1, 2, 'A', 1),
(9, 'Venta', 'Administración Venta', '#', NULL, 1, 'A', 2),
(10, 'Datos cliente', 'Gestión de datos del cliente', 'pages/venta/cliente', 9, 2, 'A', 2),
(11, 'Ahorro', 'Administración Ahorro', '#', NULL, 1, 'A', 3),
(12, 'Datos socio', 'Gestión datos socio', 'pages/ahorro/socio', 11, 2, 'A', 3),
(13, 'Catálogo', 'Catálogo', '#', NULL, 1, 'A', 4),
(14, 'Datos persona', 'Gestión datos persona', '/pages/catalogo/persona', 13, 2, 'A', 4),
(15, 'Datos producto', 'Gestión datos producto', '/pages/catalogo/producto', 13, 2, 'A', 4),
(16, 'Datos transacción', 'Gestión datos transacción', '/pages/venta/transaccion', 9, 2, 'A', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_rol_aplicacion`
--

CREATE TABLE `seg_rol_aplicacion` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `cod_aplicacion` int(11) NOT NULL COMMENT 'TRIAL',
  `nombre` varchar(50) NOT NULL COMMENT 'TRIAL',
  `descripcion` varchar(255) DEFAULT NULL COMMENT 'TRIAL',
  `estado` varchar(1) NOT NULL COMMENT 'TRIAL',
  `enum_rol_seg` varchar(24) DEFAULT NULL COMMENT 'TRIAL',
  `fec_inactivacion` datetime(6) DEFAULT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_rol_aplicacion`
--

INSERT INTO `seg_rol_aplicacion` (`codigo`, `cod_aplicacion`, `nombre`, `descripcion`, `estado`, `enum_rol_seg`, `fec_inactivacion`) VALUES
(1, 1, 'ADMINISTRADOR GENERAL', 'SUPER ADMINISTRADOR PARA EL SISTEMA DE SEGURIDADES Y ENCARGADO DE CREAR ADMINISTRADOR DE APLICACIONES', 'A', 'ADMINISTRADOR_GENERAL', NULL),
(2, 1, 'ADMINISTRADOR DE APLICACIONES', 'ADMINISTRADOR QUE CONFIGURA UNA NUEVA APLICACIÓN, Y SE ENCARGA DE CREAR ADMINISTRADORES OPERATIVOS', 'I', 'ADMINISTRADOR_APLICACION', NULL),
(3, 1, 'ADMINISTRADOR OPERATIVO', 'ADMINISTRADOR QUE SE ENCARGA DE CREAR USUARIOS PARA UNA APLICACIÓN ESPECÍFICA', 'I', 'ADMINISTRADOR_GENERAL', NULL),
(4, 2, 'ADMINISTRADOR GENERAL', 'SUPER ADMINISTRADOR PARA EL SISTEMA DE VENTAS Y ENCARGADO DE CREAR USUARIOS SU ROL Y PERFIL', 'A', 'ADMINISTRADOR_GENERAL', NULL),
(5, 2, 'ADMINISTRADOR OPERATIVO', 'ADMINISTRADOR QUE SE ENCARGA DE CREAR USUARIOS PARA UNA APLICACIÓN ESPECÍFICA', 'I', 'ADMINISTRADOR_OPERATIVO', NULL),
(6, 3, 'ADMINISTRADOR GENERAL', 'SUPER ADMINISTRADOR PARA EL SISTEMA DE VENTAS Y ENCARGADO DE CREAR USUARIOS SU ROL Y PERFIL', 'A', 'ADMINISTRADOR_GENERAL', NULL),
(7, 3, 'ADMINISTRADOR OPERATIVO', 'ADMINISTRADOR QUE SE ENCARGA DE CREAR USUARIOS PARA UNA APLICACIÓN ESPECÍFICA', 'A', 'ADMINISTRADOR_OPERATIVO', NULL),
(8, 3, 'ADMINISTRADOR APLICACIÓN', 'ADMINISTRADOR APLICACIÓN', 'A', 'ADMINISTRADOR_APLICACION', NULL),
(9, 4, 'ADMINISTRADOR GENERAL', 'ADMINISTRADOR GENERAL PARA TODOS LOS APLICATIVOS', 'A', 'ADMINISTRADOR_GENERAL', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_rol_aplicacion_recurso`
--

CREATE TABLE `seg_rol_aplicacion_recurso` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `codigo_rol_aplicacion` int(11) NOT NULL COMMENT 'TRIAL',
  `codigo_recurso` int(11) NOT NULL COMMENT 'TRIAL',
  `estado` varchar(1) DEFAULT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_rol_aplicacion_recurso`
--

INSERT INTO `seg_rol_aplicacion_recurso` (`codigo`, `codigo_rol_aplicacion`, `codigo_recurso`, `estado`) VALUES
(1, 1, 1, 'A'),
(2, 1, 2, 'A'),
(3, 1, 3, 'A'),
(4, 1, 4, 'A'),
(5, 1, 5, 'A'),
(6, 1, 6, 'A'),
(7, 1, 7, 'A'),
(8, 2, 1, 'A'),
(9, 2, 3, 'A'),
(10, 2, 5, 'A'),
(11, 2, 6, 'A'),
(12, 2, 7, 'A'),
(13, 3, 1, 'A'),
(14, 3, 7, 'A'),
(15, 3, 8, 'A'),
(16, 1, 8, 'A'),
(17, 5, 9, 'I'),
(18, 5, 9, 'I'),
(19, 4, 9, 'A'),
(20, 5, 10, 'I'),
(21, 4, 10, 'A'),
(22, 6, 11, 'A'),
(23, 6, 12, 'A'),
(24, 7, 11, 'A'),
(25, 7, 12, 'A'),
(26, 7, 12, 'I'),
(27, 9, 13, 'A'),
(28, 9, 14, 'A'),
(29, 9, 15, 'A'),
(30, 4, 16, 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_sede`
--

CREATE TABLE `seg_sede` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `nombre` varchar(150) NOT NULL COMMENT 'TRIAL',
  `descripcion` varchar(255) DEFAULT NULL COMMENT 'TRIAL',
  `nemonico` varchar(30) DEFAULT NULL COMMENT 'TRIAL',
  `sede_superior` int(11) DEFAULT NULL COMMENT 'TRIAL',
  `estado` varchar(1) NOT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_sede`
--

INSERT INTO `seg_sede` (`codigo`, `nombre`, `descripcion`, `nemonico`, `sede_superior`, `estado`) VALUES
(1, 'MATRIZ', 'MATRIZ', 'MATRIZ', NULL, 'A'),
(2, 'MATRIZ PRUEBA', 'MATRIZ PRUEBA', 'MATPRU', 1, 'A'),
(3, 'SEDE ASEDINFO', 'SEDE ASEDINFO', 'SEDEASED', 1, 'A'),
(4, 'PRUEBA', 'string', 'NEMO', 1, 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_usuario`
--

CREATE TABLE `seg_usuario` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `cod_persona` int(11) NOT NULL COMMENT 'TRIAL',
  `cambio_clave` varchar(2) DEFAULT NULL COMMENT 'TRIAL',
  `actualizacion_datos` varchar(2) DEFAULT NULL COMMENT 'TRIAL',
  `estado` varchar(1) NOT NULL COMMENT 'TRIAL',
  `token_cambio_clave` varchar(255) DEFAULT NULL COMMENT 'TRIAL',
  `fecha_solicitud_clave` datetime(6) DEFAULT NULL COMMENT 'TRIAL',
  `enum_rol_seg` varchar(24) DEFAULT NULL COMMENT 'TRIAL',
  `con_asignacion` decimal(1,0) DEFAULT NULL COMMENT 'TRIAL',
  `est_inactivar_roles` varchar(1) DEFAULT NULL COMMENT 'TRIAL',
  `est_activar_roles` varchar(1) DEFAULT NULL COMMENT 'TRIAL',
  `cod_sede` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_usuario`
--

INSERT INTO `seg_usuario` (`codigo`, `cod_persona`, `cambio_clave`, `actualizacion_datos`, `estado`, `token_cambio_clave`, `fecha_solicitud_clave`, `enum_rol_seg`, `con_asignacion`, `est_inactivar_roles`, `est_activar_roles`, `cod_sede`) VALUES
(1, 1, 'SI', 'NO', 'A', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 2, 'SI', 'SI', 'A', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 3, 'SI', 'SI', 'A', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_usuario_act_roles_app`
--

CREATE TABLE `seg_usuario_act_roles_app` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `cod_aplicacion` int(11) DEFAULT NULL COMMENT 'TRIAL',
  `cod_usuario` int(11) DEFAULT NULL COMMENT 'TRIAL',
  `estado` varchar(1) DEFAULT NULL COMMENT 'TRIAL',
  `fecha_asignacion` datetime(6) DEFAULT NULL COMMENT 'TRIAL',
  `fecha_finalizacion` datetime(6) DEFAULT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_usuario_aplicacion`
--

CREATE TABLE `seg_usuario_aplicacion` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `cod_aplicacion` int(11) DEFAULT NULL COMMENT 'TRIAL',
  `cod_usuario` int(11) DEFAULT NULL COMMENT 'TRIAL',
  `estado` varchar(1) DEFAULT NULL COMMENT 'TRIAL',
  `fecha_asignacion` datetime(6) DEFAULT NULL COMMENT 'TRIAL',
  `fecha_finalizacion` datetime(6) DEFAULT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_usuario_aplicacion`
--

INSERT INTO `seg_usuario_aplicacion` (`codigo`, `cod_aplicacion`, `cod_usuario`, `estado`, `fecha_asignacion`, `fecha_finalizacion`) VALUES
(1, 1, 1, 'A', '2023-07-19 08:38:18.000000', NULL),
(2, 2, 1, 'A', '2023-08-25 10:05:37.957000', NULL),
(3, 3, 1, 'A', '2023-07-24 16:07:07.771000', NULL),
(4, 4, 1, 'A', '2023-08-23 12:27:31.906000', NULL),
(5, 4, 2, 'A', '2023-08-24 11:40:30.781000', NULL),
(6, 3, 3, 'A', '2023-08-28 10:04:53.199000', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_usuario_detalle_accion`
--

CREATE TABLE `seg_usuario_detalle_accion` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `cod_usuario` int(11) DEFAULT NULL COMMENT 'TRIAL',
  `tipo_registro` varchar(1) DEFAULT NULL COMMENT 'TRIAL',
  `solicitado` varchar(100) DEFAULT NULL COMMENT 'TRIAL',
  `ip` varchar(50) DEFAULT NULL COMMENT 'TRIAL',
  `tipo_accion` decimal(1,0) DEFAULT NULL COMMENT 'TRIAL',
  `fecha_accion` datetime(6) DEFAULT NULL COMMENT 'TRIAL',
  `entidad` varchar(100) DEFAULT NULL COMMENT 'TRIAL',
  `cod_entidad` decimal(19,0) DEFAULT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_usuario_detalle_accion`
--

INSERT INTO `seg_usuario_detalle_accion` (`codigo`, `cod_usuario`, `tipo_registro`, `solicitado`, `ip`, `tipo_accion`, `fecha_accion`, `entidad`, `cod_entidad`) VALUES
(1, 1, 'A', NULL, '0.0.0.0', 1, '2023-07-19 12:33:30.000000', NULL, NULL),
(2, 2, 'A', NULL, '0.0.0.0', 1, '2023-07-25 11:01:20.799000', NULL, NULL),
(3, 3, 'A', NULL, '0.0.0.0', 1, '2023-07-25 11:02:55.988000', NULL, NULL),
(4, 2, 'A', NULL, '0.0.0.0', 1, '2023-07-25 11:19:39.347000', NULL, NULL),
(5, 2, 'A', NULL, '0.0.0.0', 1, '2023-07-25 11:19:53.716000', NULL, NULL),
(6, 1, 'A', NULL, '0.0.0.0', 1, '2023-07-28 16:42:46.443000', NULL, NULL),
(7, 1, 'A', NULL, '0.0.0.0', 1, '2023-07-28 16:45:18.596000', NULL, NULL),
(8, 1, 'A', NULL, '0.0.0.0', 1, '2023-07-28 16:46:48.639000', NULL, NULL),
(9, 2, 'A', NULL, '0.0.0.0', 1, '2023-07-31 09:50:46.735000', NULL, NULL),
(10, 1, 'A', NULL, '0.0.0.0', 1, '2023-07-31 10:01:26.629000', NULL, NULL),
(11, 3, 'A', NULL, '0.0.0.0', 1, '2023-07-31 10:03:01.272000', NULL, NULL),
(12, 4, 'A', NULL, '0.0.0.0', 1, '2023-07-31 10:17:51.553000', NULL, NULL),
(13, 5, 'A', NULL, '0.0.0.0', 1, '2023-07-31 10:20:53.272000', NULL, NULL),
(14, 6, 'A', NULL, '0.0.0.0', 1, '2023-07-31 10:30:43.218000', NULL, NULL),
(15, 6, 'A', NULL, '0.0.0.0', 1, '2023-07-31 10:36:34.431000', NULL, NULL),
(16, 6, 'A', NULL, '0.0.0.0', 1, '2023-07-31 10:36:49.400000', NULL, NULL),
(17, 1, 'A', NULL, '0.0.0.0', 1, '2023-07-31 14:46:14.869000', NULL, NULL),
(18, 1, 'A', NULL, '0.0.0.0', 1, '2023-08-20 12:10:21.824000', NULL, NULL),
(19, 1, 'A', NULL, '0.0.0.0', 1, '2023-08-20 12:46:29.003000', NULL, NULL),
(20, 1, 'A', NULL, '0.0.0.0', 1, '2023-08-20 12:46:37.986000', NULL, NULL),
(21, 7, 'A', NULL, '0.0.0.0', 1, '2023-08-21 10:43:39.982000', NULL, NULL),
(22, 7, 'A', NULL, '0.0.0.0', 1, '2023-08-21 10:44:17.789000', NULL, NULL),
(23, 2, 'A', NULL, '0.0.0.0', 1, '2023-08-24 11:35:46.941000', NULL, NULL),
(24, 3, 'A', NULL, '0.0.0.0', 1, '2023-08-28 10:04:17.959000', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_usuario_inact_app`
--

CREATE TABLE `seg_usuario_inact_app` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `cod_aplicacion` int(11) DEFAULT NULL COMMENT 'TRIAL',
  `cod_usuario` int(11) DEFAULT NULL COMMENT 'TRIAL',
  `estado` varchar(1) DEFAULT NULL COMMENT 'TRIAL',
  `fecha_asignacion` datetime(6) DEFAULT NULL COMMENT 'TRIAL',
  `fecha_finalizacion` datetime(6) DEFAULT NULL COMMENT 'TRIAL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seg_usuario_rol_aplicacion`
--

CREATE TABLE `seg_usuario_rol_aplicacion` (
  `codigo` int(11) NOT NULL COMMENT 'TRIAL',
  `cod_usuario` int(11) NOT NULL COMMENT 'TRIAL',
  `cod_rol_aplicacion` int(11) NOT NULL COMMENT 'TRIAL',
  `fecha_inicial` datetime(6) NOT NULL COMMENT 'TRIAL',
  `fecha_final` datetime(6) DEFAULT NULL COMMENT 'TRIAL',
  `estado` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='TRIAL';

--
-- Volcado de datos para la tabla `seg_usuario_rol_aplicacion`
--

INSERT INTO `seg_usuario_rol_aplicacion` (`codigo`, `cod_usuario`, `cod_rol_aplicacion`, `fecha_inicial`, `fecha_final`, `estado`) VALUES
(1, 1, 1, '2023-07-19 08:38:18.000000', NULL, 'A'),
(2, 1, 2, '2023-07-17 11:22:55.000000', '2023-07-17 12:32:28.000000', 'I'),
(3, 1, 3, '2023-07-17 11:19:17.000000', '2023-08-23 12:30:14.497000', 'I'),
(4, 1, 5, '2023-07-19 11:54:47.000000', NULL, 'A'),
(5, 1, 6, '2023-07-24 16:06:44.976000', NULL, 'A'),
(6, 1, 7, '2023-07-24 16:07:07.850000', '2023-08-21 14:38:58.020000', 'I'),
(7, 1, 9, '2023-08-23 12:27:32.157000', NULL, 'A'),
(8, 2, 4, '2023-08-24 11:36:15.612000', NULL, 'A'),
(9, 2, 9, '2023-08-24 11:40:30.902000', NULL, 'A'),
(10, 1, 4, '2023-08-25 10:05:38.136000', NULL, 'A'),
(11, 3, 6, '2023-08-28 10:04:53.333000', NULL, 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ven_cliente`
--

CREATE TABLE `ven_cliente` (
  `codigo` int(11) NOT NULL,
  `tipo_cliente` varchar(150) DEFAULT NULL,
  `fecha_inicio` datetime(6) DEFAULT NULL,
  `cod_persona` int(11) NOT NULL,
  `estado` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ven_cliente`
--

INSERT INTO `ven_cliente` (`codigo`, `tipo_cliente`, `fecha_inicio`, `cod_persona`, `estado`) VALUES
(1, 'tipo cliente', '2023-08-21 00:00:00.000000', 1, 'A'),
(2, 'mayorista', '2023-08-25 00:00:00.000000', 2, 'A'),
(3, 'ocasional', '2023-08-28 00:00:00.000000', 3, 'A');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aho_socio`
--
ALTER TABLE `aho_socio`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `cat_modulo`
--
ALTER TABLE `cat_modulo`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `cat_operacion`
--
ALTER TABLE `cat_operacion`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `cat_persona`
--
ALTER TABLE `cat_persona`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `cat_producto`
--
ALTER TABLE `cat_producto`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `cat_transaccion`
--
ALTER TABLE `cat_transaccion`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_aplicacion`
--
ALTER TABLE `seg_aplicacion`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `uk_seg_aplicacion_prefijo` (`prefijo`);

--
-- Indices de la tabla `seg_asignacion_usuario_sede`
--
ALTER TABLE `seg_asignacion_usuario_sede`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_clave_usuario`
--
ALTER TABLE `seg_clave_usuario`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `idx_seg_clave_fech` (`fecha_fin`,`cod_usuario`,`clave`);

--
-- Indices de la tabla `seg_inicio_sesion`
--
ALTER TABLE `seg_inicio_sesion`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_parametro`
--
ALTER TABLE `seg_parametro`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_recurso`
--
ALTER TABLE `seg_recurso`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `fk_seg_aplicacion_recurso` (`codigo_aplicacion`);

--
-- Indices de la tabla `seg_rol_aplicacion`
--
ALTER TABLE `seg_rol_aplicacion`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `fk_seg_aplicacion_rol` (`cod_aplicacion`);

--
-- Indices de la tabla `seg_rol_aplicacion_recurso`
--
ALTER TABLE `seg_rol_aplicacion_recurso`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_sede`
--
ALTER TABLE `seg_sede`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_usuario`
--
ALTER TABLE `seg_usuario`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_usuario_act_roles_app`
--
ALTER TABLE `seg_usuario_act_roles_app`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_usuario_aplicacion`
--
ALTER TABLE `seg_usuario_aplicacion`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_usuario_detalle_accion`
--
ALTER TABLE `seg_usuario_detalle_accion`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_usuario_inact_app`
--
ALTER TABLE `seg_usuario_inact_app`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `seg_usuario_rol_aplicacion`
--
ALTER TABLE `seg_usuario_rol_aplicacion`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `fk_seg_rol_usuario` (`cod_rol_aplicacion`);

--
-- Indices de la tabla `ven_cliente`
--
ALTER TABLE `ven_cliente`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aho_socio`
--
ALTER TABLE `aho_socio`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cat_modulo`
--
ALTER TABLE `cat_modulo`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cat_operacion`
--
ALTER TABLE `cat_operacion`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cat_persona`
--
ALTER TABLE `cat_persona`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cat_producto`
--
ALTER TABLE `cat_producto`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `cat_transaccion`
--
ALTER TABLE `cat_transaccion`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `seg_aplicacion`
--
ALTER TABLE `seg_aplicacion`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `seg_asignacion_usuario_sede`
--
ALTER TABLE `seg_asignacion_usuario_sede`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL';

--
-- AUTO_INCREMENT de la tabla `seg_clave_usuario`
--
ALTER TABLE `seg_clave_usuario`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `seg_inicio_sesion`
--
ALTER TABLE `seg_inicio_sesion`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `seg_parametro`
--
ALTER TABLE `seg_parametro`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `seg_recurso`
--
ALTER TABLE `seg_recurso`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `seg_rol_aplicacion`
--
ALTER TABLE `seg_rol_aplicacion`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `seg_rol_aplicacion_recurso`
--
ALTER TABLE `seg_rol_aplicacion_recurso`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `seg_sede`
--
ALTER TABLE `seg_sede`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `seg_usuario`
--
ALTER TABLE `seg_usuario`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `seg_usuario_act_roles_app`
--
ALTER TABLE `seg_usuario_act_roles_app`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL';

--
-- AUTO_INCREMENT de la tabla `seg_usuario_aplicacion`
--
ALTER TABLE `seg_usuario_aplicacion`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `seg_usuario_detalle_accion`
--
ALTER TABLE `seg_usuario_detalle_accion`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `seg_usuario_inact_app`
--
ALTER TABLE `seg_usuario_inact_app`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL';

--
-- AUTO_INCREMENT de la tabla `seg_usuario_rol_aplicacion`
--
ALTER TABLE `seg_usuario_rol_aplicacion`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'TRIAL', AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `ven_cliente`
--
ALTER TABLE `ven_cliente`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
