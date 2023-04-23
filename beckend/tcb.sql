CREATE DATABASE  IF NOT EXISTS `thechoicebox` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `thechoicebox`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: thechoicebox
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_users`
--

DROP TABLE IF EXISTS `admin_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(70) NOT NULL,
  `emailId` varchar(320) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `emailId` (`emailId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_users`
--

LOCK TABLES `admin_users` WRITE;
/*!40000 ALTER TABLE `admin_users` DISABLE KEYS */;
INSERT INTO `admin_users` VALUES ('0e2d91d7-c8cf-40d8-8fd2-3cf05d34af2f','Aghj','avi221@gm.io','$2b$12$zx6yEOia1ijceb11asNzc.mMveSZkN8ZpOZ8rIM7RnC9TSP0TrSFC','admin','http://localhost:3000/images/default_dp.svg','2021-07-17 05:36:33','2021-07-17 05:36:33'),('2d9fe44d-edf1-4754-b33d-1796c297832c','string','string@ty.po','$2b$12$87Ip4nuHN.40FcZPM2lUl.MnxUS/yTBgl4kGq1/.QpD36rVyvOJJi','string','string','2021-07-28 03:23:47','2021-07-28 03:23:47'),('453caf0f-2ace-4685-9475-4d2293ba49ec','Aghj','avi2@gm.io','$2b$12$me9DfP6fPEYrsdrA7waWtefX1XRd4ZSCn.tGzVANmNTWmXRY.wXiC','admin','http://localhost:3000/images/default_dp.svg','2021-07-17 04:35:45','2021-07-17 04:35:45'),('4f168155-e050-4e4b-a6ba-4685d2989568','abc','avi34@gm.io','$2b$12$7C2//0P/KFGPimMx6aHsX.r0U3q8IMz7Y4T3zoOetDhSuRYpDovOK','gg','http://localhost:3000/images/default_dp.svg','2021-07-17 06:00:30','2021-07-17 06:00:30'),('60294861-bfb8-4804-a203-44ad4ef5105a','Aghj','avi21@gm.io','$2b$12$U2g7DzssKNVSb96aCWVoo.yCBouJwyO4voKuw3MUixu5b10J/f2rK','admin','http://localhost:3000/images/default_dp.svg','2021-07-17 05:32:20','2021-07-17 05:32:20'),('a787c8b8-80c2-4cb0-bdc2-4542314e27e4','ssss','avi123@gm.io','$2b$12$D3KdTcAzyjTyu8nvYCqeWuDyA9ovfXnLoFz9uvlqM3eumHHneV436','ad','http://localhost:3000/images/default_dp.svg','2021-07-17 05:54:16','2021-07-17 05:54:16'),('d0b58c4f-22e1-4d43-b00e-596dad035749','Avishek','abc@gm.io','$2b$12$40/8fcjsxqLLJb08.ojZh.z0HDAiGGzEmlinaXGNHDOCOn11nA8ma','string','http://localhost:3000/images/default_dp.svg','2021-07-17 10:52:48','2021-07-17 10:52:48'),('ec51c81a-8d15-45fa-87f0-2f78f89deabc','Aghj','avi1@gm.io','$2b$12$7EN2SkTM8bG4YKzvGYYIVeiofkQDyVi1qPz5KAFUi5iDYI71wlc3S','admin','http://localhost:3000/images/default_dp.svg','2021-07-17 04:31:16','2021-07-17 04:31:16');
/*!40000 ALTER TABLE `admin_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `category` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES ('041f3670-748e-41c3-89ec-2ecf95752bb7','hhhhe1','2021-07-13 15:16:58','2021-07-18 10:31:47'),('2f24eedb-5c99-46a9-a622-8aa35ab3eba2','gggg','2021-07-18 10:20:27','2021-07-18 10:20:27'),('5a0b85a7-a8be-4cb0-963c-2e1c9d2f9165','eerrrr','2021-07-18 10:11:36','2021-07-18 10:11:36'),('67809b08-083f-4b36-a961-23b134e338b6','uul','2021-07-18 10:20:45','2021-07-18 10:20:45'),('8162e4d6-ca25-4415-b4d3-4d5e07167196','hhh','2021-07-18 10:20:31','2021-07-18 10:20:31'),('8285485d-a860-433f-b6ba-55ebb459ae56','ll','2021-07-18 10:20:41','2021-07-18 10:20:41'),('a905fd02-d29b-49a2-abba-3108cb4b84ff','lame','2021-07-18 10:11:21','2021-07-18 10:11:21'),('c7d87498-7535-47f1-a284-625cb104bda3','iy','2021-07-18 10:20:50','2021-07-18 10:20:50'),('f554e9ba-02fc-43af-a44d-d696e2927cb6','kkk','2021-07-18 10:20:37','2021-07-18 10:20:37');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `channel_details`
--

DROP TABLE IF EXISTS `channel_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `channel_details` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `subscribers` varchar(255) NOT NULL,
  `total_videos` bigint NOT NULL,
  `total_views` bigint NOT NULL,
  `channelLink` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channel_details`
--

LOCK TABLES `channel_details` WRITE;
/*!40000 ALTER TABLE `channel_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `channel_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `comment` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `posts_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `posts_id` (`posts_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_types`
--

DROP TABLE IF EXISTS `post_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_types` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_types`
--

LOCK TABLES `post_types` WRITE;
/*!40000 ALTER TABLE `post_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `blog_content` text NOT NULL,
  `youtube_video_link` varchar(255) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `author` varchar(50) NOT NULL,
  `likes` bigint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `category_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `post_type_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `sub_category_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `type_category_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `post_type_id` (`post_type_id`),
  KEY `sub_category_id` (`sub_category_id`),
  KEY `type_category_id` (`type_category_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`post_type_id`) REFERENCES `post_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posts_ibfk_3` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posts_ibfk_4` FOREIGN KEY (`type_category_id`) REFERENCES `type_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES ('19d00a9b-9a0c-41ef-a20c-01b9b31ecb65','This is a blog post','description','http://localhost:3000/images/posts/thisisablogpost1628432816496.jpg','This is blog content blah<br>','www.youtube.com','Science, Comedy','Avi',2,'2021-08-08 14:26:56','2021-08-08 14:26:56','041f3670-748e-41c3-89ec-2ecf95752bb7',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819'),('2171a821-d995-40fd-aeca-8e51823d3ddb','This is a blog post','description','http://localhost:3000/images/posts/thisisablogpost1628433009391.jpg','This is blog content blah<br>','www.youtube.com','Science, Comedy','Avi',2,'2021-08-08 14:30:09','2021-08-08 14:30:09','041f3670-748e-41c3-89ec-2ecf95752bb7',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819'),('25ba030c-dd44-4411-82b2-b3aabb81423a','Setting up Git repositories correctly','A source code is arguably the most significant facet of computer software. It is an enitity that is never seen by the end users ans is only limited. Blah blah blah...','http://localhost:3000/images/posts/default_post.svg','mmkml','https://www.youtube.com/watch?v=sCP6LsCJMGg','Science, Comedy','avi',0,'2021-07-28 15:52:18','2021-07-28 15:52:18','041f3670-748e-41c3-89ec-2ecf95752bb7',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819'),('36c1f678-520b-4201-acc3-c7a0faa10e00','Setting up Git repositories correctly','A source code is arguably the most significant facet of computer software. It is an enitity that is never seen by the end users ans is only limited. Blah blah blah...','http://localhost:3000/images/posts/default_post.svg','blog','www.url.com','Science, Comedy','yui',0,'2021-07-29 04:01:16','2021-07-29 04:01:16','041f3670-748e-41c3-89ec-2ecf95752bb7',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819'),('3be7c028-a2fc-41c4-afcf-a12249c44a93','Setting up Git repositories correctly','A source code is arguably the most significant facet of computer software. It is an enitity that is never seen by the end users ans is only limited. Blah blah blah...','http://localhost:3000/images/posts/default_post.svg','mmkml','https://www.youtube.com/watch?v=sCP6LsCJMGg','Science, Comedy','avi',0,'2021-07-28 16:12:20','2021-07-28 16:12:20','041f3670-748e-41c3-89ec-2ecf95752bb7',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819'),('63eda034-5b4c-43b9-b6dd-f8f78f1dc788','You definitely should be using NestJS for your Node apps','Let\'s create an app and make it to the cloud, and make a load test to see how many instances we need in order to handle an unicorn app on your device. Blah blah blah blah ...','http://localhost:3000/images/profile/default_dp.svg','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).','https://www.youtube.com/watch?v=NMjOP_XeZj0','Science, Comedy','Avishek Datta Ray',0,'2021-08-04 03:54:24','2021-08-04 03:54:24','a905fd02-d29b-49a2-abba-3108cb4b84ff',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819'),('a0a40e7c-d4f5-442c-ab06-6aeb00ef73f9','Setting up Git repositories correctly','A source code is arguably the most significant facet of computer software. It is an enitity that is never seen by the end users ans is only limited. Blah blah blah...','http://localhost:3000/images/posts/default_post.svg','This is blog 2','https://www.youtube.com/watch?v=6EbLerCu9LI','Science, Comedy','Avishek',0,'2021-07-28 14:40:18','2021-07-28 14:40:18','041f3670-748e-41c3-89ec-2ecf95752bb7',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819'),('bf6f28f6-f51f-483d-bc85-840b7115d2bb','Setting up Git repositories correctly','A source code is arguably the most significant facet of computer software. It is an enitity that is never seen by the end users ans is only limited. Blah blah blah...','http://localhost:3000/images/posts/default_post.svg','blog','www.url.com','Science, Comedy','yui',0,'2021-07-29 03:55:23','2021-07-29 03:55:23','041f3670-748e-41c3-89ec-2ecf95752bb7',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819'),('e4cb7488-7314-4494-84ce-96395db4ab7b','Setting up Git repositories correctly','A source code is arguably the most significant facet of computer software. It is an enitity that is never seen by the end users ans is only limited. Blah blah blah...','http://localhost:3000/images/posts/default_post.svg','This is blog content','https://www.youtube.com/watch?v=04uTwevbyBU','Science, Comedy','Avishek',0,'2021-07-28 05:11:28','2021-07-28 05:11:28','a905fd02-d29b-49a2-abba-3108cb4b84ff',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819'),('ec36b91a-46c6-41e0-b1e1-9c5fb7b3c075','Setting up Git repositories correctly','A source code is arguably the most significant facet of computer software. It is an enitity that is never seen by the end users ans is only limited. Blah blah blah...','http://localhost:3000/images/posts/default_post.svg','mmkml','https://www.youtube.com/watch?v=sCP6LsCJMGg','Science, Comedy','avi',0,'2021-07-28 16:09:08','2021-07-28 16:09:08','041f3670-748e-41c3-89ec-2ecf95752bb7',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819'),('f581550d-c169-454c-8eab-50809f147d15','Setting up Git repositories correctly','A source code is arguably the most significant facet of computer software. It is an enitity that is never seen by the end users ans is only limited. Blah blah blah...','http://localhost:3000/images/posts/default_post.svg','blog','www.url.com','Science, Comedy','yui',0,'2021-07-29 03:47:48','2021-07-29 03:47:48','041f3670-748e-41c3-89ec-2ecf95752bb7',NULL,'3407f840-95dd-453c-b5a6-d88e2143df72','3e7b8578-1981-4476-b55a-54892814a819');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `replies`
--

DROP TABLE IF EXISTS `replies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `replies` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `reply` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `comments_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_id` (`comments_id`),
  CONSTRAINT `replies_ibfk_1` FOREIGN KEY (`comments_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replies`
--

LOCK TABLES `replies` WRITE;
/*!40000 ALTER TABLE `replies` DISABLE KEYS */;
/*!40000 ALTER TABLE `replies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_categories`
--

DROP TABLE IF EXISTS `sub_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_categories` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `sub_category` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_categories`
--

LOCK TABLES `sub_categories` WRITE;
/*!40000 ALTER TABLE `sub_categories` DISABLE KEYS */;
INSERT INTO `sub_categories` VALUES ('3407f840-95dd-453c-b5a6-d88e2143df72','sub1','2021-07-28 05:04:57','2021-07-28 05:04:57');
/*!40000 ALTER TABLE `sub_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `name` varchar(255) DEFAULT NULL,
  `roll` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES ('Aryan',10),('Avishek',22),('XYZ',99);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_categories`
--

DROP TABLE IF EXISTS `type_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_categories` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type_category` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_categories`
--

LOCK TABLES `type_categories` WRITE;
/*!40000 ALTER TABLE `type_categories` DISABLE KEYS */;
INSERT INTO `type_categories` VALUES ('3e7b8578-1981-4476-b55a-54892814a819','type1','2021-07-28 05:05:06','2021-07-28 05:05:06');
/*!40000 ALTER TABLE `type_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(70) NOT NULL,
  `emailId` varchar(320) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `emailId` (`emailId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Dump completed on 2021-08-09  9:25:53
