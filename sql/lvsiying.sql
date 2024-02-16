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

 Date: 16/02/2024 20:11:20
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
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (2, '2024-02-14', 'How to mind your own business', 'https://www.npr.org/transcripts/1199885917', 'Malaka Gharib', 'Do you often find yourself trying to solve problems for your friends and family? Draining your time, resources and energy to offer others help or advice?\n\nIf so, Yasin Bojang would like for you to slow down, mind your business — and consider how it might be affecting your mental health. \"When you constantly intervene, you will likely have nothing left to give when hard situations present themselves.\"\n\nBojang is the co-founder of Home Girls Unite, a U.K.-based group that supports women from marginalized communities, particularly eldest daughters, who Bojang believes bear the burden of responsibility in immigrant households.\n\nSince the project launched in 2018, her organization has helped over 10,000 eldest daughters. These women say they often feel obligated to fix other peoples\' lives, says Bojang. They\'ve become the go-to person who, say, runs errands for their parents, lends money to their siblings or counsels a friend through a break-up. It\'s not coming from nosiness, but from their sense of duty to their loved ones. But it can leave them feeling burnt out and overwhelmed.\n\nThat\'s why sometimes, it\'s best to stay in your lane, says Bojang. Here\'s the advice she gives to women in her support group.\n\nWhen you should mind your own business?\nOccasionally, it\'s OK to get involved in other people\'s issues. You do it because they want your help — and because you care. But reconsider ...\nIf you feel like you\'re being taken advantage of. If you sense that your loved ones feel entitled to your time and energy, it means your boundaries aren\'t being respected, says Bojang. \"If you\'re constantly going out of your way to make everyone\'s life easier,\" people may think, \"if she\'s going to do it, why should I?\"\nIf they may miss a learning opportunity. Let\'s say your little brother is looking for a job yet again. Instead of sending him job postings like you normally do, let him take the lead. \"Always being there and trying to fix everything is not benefiting them,\" says Bojang. \"What will happen when you\'re not there? How are they going to learn [if you] constantly do things for them?\"', 'business', 'indigo', 'https://media.npr.org/assets/img/2024/01/23/mind_business_wide-28412f3c03a07c5e1e67ab2714574c08855f1a4e.jpg?s=800&c=85&f=jpeg', '1');
INSERT INTO `article` VALUES (3, '2024-02-14', 'How to mind your own business', 'https://www.npr.org/transcripts/1199885917', 'Malaka Gharib', 'Do you often find yourself trying to solve problems for your friends and family? Draining your time, resources and energy to offer others help or advice?\n\nIf so, Yasin Bojang would like for you to slow down, mind your business — and consider how it might be affecting your mental health. \"When you constantly intervene, you will likely have nothing left to give when hard situations present themselves.\"\n\nBojang is the co-founder of Home Girls Unite, a U.K.-based group that supports women from marginalized communities, particularly eldest daughters, who Bojang believes bear the burden of responsibility in immigrant households.\n\nSince the project launched in 2018, her organization has helped over 10,000 eldest daughters. These women say they often feel obligated to fix other peoples\' lives, says Bojang. They\'ve become the go-to person who, say, runs errands for their parents, lends money to their siblings or counsels a friend through a break-up. It\'s not coming from nosiness, but from their sense of duty to their loved ones. But it can leave them feeling burnt out and overwhelmed.\n\nThat\'s why sometimes, it\'s best to stay in your lane, says Bojang. Here\'s the advice she gives to women in her support group.\n\nWhen you should mind your own business?\nOccasionally, it\'s OK to get involved in other people\'s issues. You do it because they want your help — and because you care. But reconsider ...\nIf you feel like you\'re being taken advantage of. If you sense that your loved ones feel entitled to your time and energy, it means your boundaries aren\'t being respected, says Bojang. \"If you\'re constantly going out of your way to make everyone\'s life easier,\" people may think, \"if she\'s going to do it, why should I?\"\nIf they may miss a learning opportunity. Let\'s say your little brother is looking for a job yet again. Instead of sending him job postings like you normally do, let him take the lead. \"Always being there and trying to fix everything is not benefiting them,\" says Bojang. \"What will happen when you\'re not there? How are they going to learn [if you] constantly do things for them?\"', 'business', 'indigo', 'https://media.npr.org/assets/img/2024/01/23/mind_business_wide-28412f3c03a07c5e1e67ab2714574c08855f1a4e.jpg?s=800&c=85&f=jpeg', '1');
INSERT INTO `article` VALUES (4, '2024-02-14', 'How to mind your own business', 'https://www.npr.org/transcripts/1199885917', 'Malaka Gharib', 'Do you often find yourself trying to solve problems for your friends and family? Draining your time, resources and energy to offer others help or advice?\n\nIf so, Yasin Bojang would like for you to slow down, mind your business — and consider how it might be affecting your mental health. \"When you constantly intervene, you will likely have nothing left to give when hard situations present themselves.\"\n\nBojang is the co-founder of Home Girls Unite, a U.K.-based group that supports women from marginalized communities, particularly eldest daughters, who Bojang believes bear the burden of responsibility in immigrant households.\n\nSince the project launched in 2018, her organization has helped over 10,000 eldest daughters. These women say they often feel obligated to fix other peoples\' lives, says Bojang. They\'ve become the go-to person who, say, runs errands for their parents, lends money to their siblings or counsels a friend through a break-up. It\'s not coming from nosiness, but from their sense of duty to their loved ones. But it can leave them feeling burnt out and overwhelmed.\n\nThat\'s why sometimes, it\'s best to stay in your lane, says Bojang. Here\'s the advice she gives to women in her support group.\n\nWhen you should mind your own business?\nOccasionally, it\'s OK to get involved in other people\'s issues. You do it because they want your help — and because you care. But reconsider ...\nIf you feel like you\'re being taken advantage of. If you sense that your loved ones feel entitled to your time and energy, it means your boundaries aren\'t being respected, says Bojang. \"If you\'re constantly going out of your way to make everyone\'s life easier,\" people may think, \"if she\'s going to do it, why should I?\"\nIf they may miss a learning opportunity. Let\'s say your little brother is looking for a job yet again. Instead of sending him job postings like you normally do, let him take the lead. \"Always being there and trying to fix everything is not benefiting them,\" says Bojang. \"What will happen when you\'re not there? How are they going to learn [if you] constantly do things for them?\"', 'business', 'indigo', 'https://media.npr.org/assets/img/2024/01/23/mind_business_wide-28412f3c03a07c5e1e67ab2714574c08855f1a4e.jpg?s=800&c=85&f=jpeg', '1');
INSERT INTO `article` VALUES (5, '2024-02-14', 'How to mind your own business', 'https://www.npr.org/transcripts/1199885917', 'Malaka Gharib', 'Do you often find yourself trying to solve problems for your friends and family? Draining your time, resources and energy to offer others help or advice?\n\nIf so, Yasin Bojang would like for you to slow down, mind your business — and consider how it might be affecting your mental health. \"When you constantly intervene, you will likely have nothing left to give when hard situations present themselves.\"\n\nBojang is the co-founder of Home Girls Unite, a U.K.-based group that supports women from marginalized communities, particularly eldest daughters, who Bojang believes bear the burden of responsibility in immigrant households.\n\nSince the project launched in 2018, her organization has helped over 10,000 eldest daughters. These women say they often feel obligated to fix other peoples\' lives, says Bojang. They\'ve become the go-to person who, say, runs errands for their parents, lends money to their siblings or counsels a friend through a break-up. It\'s not coming from nosiness, but from their sense of duty to their loved ones. But it can leave them feeling burnt out and overwhelmed.\n\nThat\'s why sometimes, it\'s best to stay in your lane, says Bojang. Here\'s the advice she gives to women in her support group.\n\nWhen you should mind your own business?\nOccasionally, it\'s OK to get involved in other people\'s issues. You do it because they want your help — and because you care. But reconsider ...\nIf you feel like you\'re being taken advantage of. If you sense that your loved ones feel entitled to your time and energy, it means your boundaries aren\'t being respected, says Bojang. \"If you\'re constantly going out of your way to make everyone\'s life easier,\" people may think, \"if she\'s going to do it, why should I?\"\nIf they may miss a learning opportunity. Let\'s say your little brother is looking for a job yet again. Instead of sending him job postings like you normally do, let him take the lead. \"Always being there and trying to fix everything is not benefiting them,\" says Bojang. \"What will happen when you\'re not there? How are they going to learn [if you] constantly do things for them?\"', 'business', 'indigo', 'https://media.npr.org/assets/img/2024/01/23/mind_business_wide-28412f3c03a07c5e1e67ab2714574c08855f1a4e.jpg?s=800&c=85&f=jpeg', '1');

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
  `from` bigint(0) NULL DEFAULT NULL,
  `to` bigint(0) NULL DEFAULT NULL,
  `word` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `index` int(0) NULL DEFAULT NULL,
  `success` int(0) NULL DEFAULT NULL,
  `accent` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `mean_cn` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `mean_en` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sentence` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sentence_trans` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sentence_phrase` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `word_etyma` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

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
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `account`(`account`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

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

SET FOREIGN_KEY_CHECKS = 1;
