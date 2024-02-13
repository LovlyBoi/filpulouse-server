/*
 Navicat Premium Data Transfer

 Source Server         : 本机MySQL
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : lvsiying

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 13/02/2024 13:03:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `create_time` date NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `source` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `tag_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tag_color` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pics` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, '2024-02-11', 'hello', 'www.baidu.com', 'abc', 'abc', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for translation_record
-- ----------------------------
DROP TABLE IF EXISTS `translation_record`;
CREATE TABLE `translation_record`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `create_time` date NULL DEFAULT NULL,
  `article_id` bigint(0) NULL DEFAULT NULL,
  `origin_statement` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `result` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `user_id` bigint(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of translation_record
-- ----------------------------
INSERT INTO `translation_record` VALUES (4, '2024-02-11', 1, 'hello', '你好', 1);
INSERT INTO `translation_record` VALUES (5, '2024-02-11', 1, 'hello', '你好', 1);
INSERT INTO `translation_record` VALUES (6, '2024-02-11', 1, 'hello', '你好', 1);
INSERT INTO `translation_record` VALUES (8, '2024-02-11', 1, 'hello', '你好1', 1);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` date NULL DEFAULT NULL,
  `enable` int(0) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `account`(`account`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '$2a$10$3sudGTdcOPbmSVG26NKxJucb8jtSr8xLeHOomlkJubc/PHbxdziky', '2024-02-11', 1);
INSERT INTO `user` VALUES (2, 'abc', '$2a$10$tMDypXgHjDhn7wsK2PP9z.VUWEAsY6iTTtuxN0Pw3mjGVXntcCjIm', '2024-02-11', 1);
INSERT INTO `user` VALUES (7, 'ab111c', '$2a$10$cYoPqkbiIsALUy5HYbJ3detRhbpLQ2k5GzGCoFDcFRMQkLCuj2qqa', '2024-02-11', 1);

-- ----------------------------
-- Table structure for user_article_relation
-- ----------------------------
DROP TABLE IF EXISTS `user_article_relation`;
CREATE TABLE `user_article_relation`  (
  `user_id` bigint(0) NOT NULL,
  `article_id` bigint(0) NOT NULL,
  `create_time` date NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`, `article_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_article_relation
-- ----------------------------
INSERT INTO `user_article_relation` VALUES (1, 1, '2024-02-11');
INSERT INTO `user_article_relation` VALUES (1, 2, '2024-02-11');

SET FOREIGN_KEY_CHECKS = 1;
