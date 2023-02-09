-- MariaDB dump 10.19  Distrib 10.5.18-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: exampledb
-- ------------------------------------------------------
-- Server version	10.5.18-MariaDB-0+deb11u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test test','test@google.com','$2a$10$JhjczWKL7qt96EdoV7Tq9OMo8HD3lNJiRmGCwj3QMMbHfy7YmG1vK',1),(2,'test next','tnext@google.com','$2a$10$1DMic3JPKqSxey/t8qUgAeqlS/vCSJGTNoLDMMs5Yyfyfz0.1kTF6',1),(3,'test next2','tnext2@google.com','$2a$10$VYXqvWNaa3ffOEU3FrylT.bB6B6bTdIJEoGptWS9qx.z7zSZNftHe',1),(4,'test react','treact@google.com','$2a$10$rthFz0mnCEq/bXh2g6qkROgfBhJofODs.ZrVLXTNdmTeUMCSdGUSC',1),(5,'test testing','testt@google.com','$2a$10$19A.1TTCWwfDrKfYToFxyeT.00CV3R7Coq/6/ShjcidU8Tzh.sDU6',1),(6,'test tester','ttester@google.com','$2a$10$gt7qjAWzpqEHdqQurmMfkOjQ/jeFE8XZX9hb/rLhRHCZ2BRmECofq',1),(7,'test seq','tseq@google.com','$2a$10$6OmgJ/nlDeF18mlDzOwKhu4Kp1u0oAkGF79lDmuWnX4bUqWmCQJzS',1),(8,'test seq2','tseq2@google.com','$2a$10$b881fdR8nuAjjJdIEVNoxe7mAigs3iTBSqO1f5G3XbEEZLG799ygu',1),(9,'testseq','testseq@google.com','$2a$10$CmZpPGOsPdt3NV3bcDp7iOpsKvB4F9lBspnMxddM6dZowkSQqa7sa',1),(10,'testing tester','tttester@google.com','$2a$10$XudSSqxksPFQhVNwqs46Be3Q64mhbDfSIWUtmQAxD9P3i4ZBdcXFO',1),(11,'testing test','ttesttest@google.com','$2a$10$M8LusMsZoWvIVmN09eRCA.6w8688mRzGfFbPxZFS6qk9LMnd.nx/G',1),(12,'test tester test','testest@google.com','$2a$10$SX4E/xJL5RxcL0/g2qeVLefzAJcpfB6EFaGQo7COlLxtDGyLXVPwy',1),(13,'test tester test','testertest@google.com','$2a$10$2dlgG2NDoKaJ2q7Y.oEREu6dfPYKAniyl/t1.P7/CxcU5lO1tpFVO',1),(14,'ttt ttt','ttt@google.com','$2a$10$QKpsFLHsYtAK2bO6ZEzuOOI4.ufPbJCzGagSRuQCXuFz2hxYukVH2',1),(15,'ttt test','ttttest@google.com','$2a$10$nMG0X0I5i2HDKJHCVqi12.riURNAnk/NIXZHBKSIwIi7gdYY5ccQu',1),(16,'test test ttt','ttestt@google.com','$2a$10$10bDs4ih3/lRM5FBu/6z5.AsEsJYfDQc3UjVBYM5hRh0xFtcy9qUi',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-09  9:37:32
