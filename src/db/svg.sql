-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 29, 2021 at 03:47 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `svg_database`
--
CREATE DATABASE IF NOT EXISTS `svg_database` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `svg_database`;

-- --------------------------------------------------------

--
-- Table structure for table `atributes`
--

CREATE TABLE `atributes` (
  `tag_id` int(255) NOT NULL,
  `id_atribute` int(255) NOT NULL,
  `atribute` varchar(255) NOT NULL,
  `value` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `svgs`
--

CREATE TABLE `svgs` (
  `id_svg` int(255) NOT NULL,
  `attributes_svg` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `svg_id` int(255) NOT NULL,
  `id_tag` int(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `atributes_tag` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atributes`
--
ALTER TABLE `atributes`
  ADD PRIMARY KEY (`id_atribute`),
  ADD KEY `tag_id` (`tag_id`);

--
-- Indexes for table `svgs`
--
ALTER TABLE `svgs`
  ADD PRIMARY KEY (`id_svg`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id_tag`),
  ADD KEY `svg_id` (`svg_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `atributes`
--
ALTER TABLE `atributes`
  MODIFY `id_atribute` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id_tag` int(255) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `atributes`
--
ALTER TABLE `atributes`
  ADD CONSTRAINT `atributes_ibfk_1` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id_tag`);

--
-- Constraints for table `tags`
--
ALTER TABLE `tags`
  ADD CONSTRAINT `tags_ibfk_1` FOREIGN KEY (`svg_id`) REFERENCES `svgs` (`id_svg`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
