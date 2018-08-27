/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 100014
Source Host           : localhost:3306
Source Database       : register

Target Server Type    : MYSQL
Target Server Version : 100014
File Encoding         : 65001

Date: 2018-08-27 20:00:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslists
-- ----------------------------
DROP TABLE IF EXISTS `goodslists`;
CREATE TABLE `goodslists` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `sales` varchar(255) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslists
-- ----------------------------
INSERT INTO `goodslists` VALUES ('1', '【顺丰包邮 送壳膜】华为 nova 2S 全面屏 6GB运行 移动联通电', '../img/c1.jpg', '1758.00', '123', '2018-08-25 17:27:21');
INSERT INTO `goodslists` VALUES ('2', '【顺丰包邮 送壳膜】荣耀 V10全网通 ', '../img/c2.jpg', '2049.00', '21', '2018-08-25 17:27:22');
INSERT INTO `goodslists` VALUES ('3', '【顺丰包邮 送壳膜】华为 Mate 10 4GB+64GB 移动', '../img/c3.jpg', '2558.00', '321', '2018-08-25 17:27:23');
INSERT INTO `goodslists` VALUES ('4', '【顺丰包邮 送壳膜】华为 Mate10Pro 全网通', '../img/c4.jpg', '3139.00', '231', '2018-08-25 17:27:24');
INSERT INTO `goodslists` VALUES ('5', '【顺丰包邮 送壳膜】华为 Mate 10 6GB+128GB 移动', '../img/c5.jpg', '3149.00', '6546', '2018-08-25 17:27:26');
INSERT INTO `goodslists` VALUES ('6', '【全国包邮+壳膜支架】魅族 魅蓝 Note6 4+64G 全网通 8核', '../img/c6.jpg', '808.00', '898', '2018-08-25 17:27:28');
INSERT INTO `goodslists` VALUES ('7', '【现货包邮 送壳膜】荣耀 畅玩7X（4GB 全网通）移动联通电信', '../img/c7.jpg', '919.00', '54', '2018-08-25 17:27:29');
INSERT INTO `goodslists` VALUES ('8', '【现货包邮 送壳膜】魅族 魅蓝 Note6 4GB+64GB 全网通4G', '../img/c8.jpg', '808.00', '324', '2018-08-25 17:27:30');
INSERT INTO `goodslists` VALUES ('9', '【包邮送壳膜支架】华为 HUAWEI Mate 10 4+64GB 全网通 ', '../img/c9.jpg', '2558.00', '234', '2018-08-25 17:27:31');
INSERT INTO `goodslists` VALUES ('10', '【顺丰包邮 送壳膜】华为 nova 3e 全面屏 4GB运行 ', '../img/c10.jpg', '1558.00', '234', '2018-08-25 17:27:33');
INSERT INTO `goodslists` VALUES ('11', '【真正的实惠】荣耀 V10全网通 高配版 6+64/128G 全网通 送', '../img/c11.jpg', '1998.00', '2143', '2018-08-25 17:27:35');
INSERT INTO `goodslists` VALUES ('12', '【全国包邮送壳膜】荣耀 畅玩7X（4GB RAM/全网', '../img/c12.jpg', '898.00', '45', '2018-08-25 17:27:36');
INSERT INTO `goodslists` VALUES ('13', '【顺丰包邮 送壳膜】荣耀9青春版 全网通 高配版 ', '../img/c13.jpg', '979.00', '2131', '2018-08-25 17:27:37');
INSERT INTO `goodslists` VALUES ('14', '【顺丰包邮 送壳膜】魅族 PRO 7 4+64G 全网通 移动联通电信', '../img/c14.jpg', '1329.00', '432', '2018-08-25 17:27:39');
INSERT INTO `goodslists` VALUES ('15', '【包邮送壳膜】华为 HUAWEI Mate 10 6GB+128GB 全', '../img/c15.jpg', '3138.00', '312', '2018-08-25 17:27:40');
INSERT INTO `goodslists` VALUES ('16', '【顺丰包邮】vivo X20 全面屏手机 全网通 4GB+64GB 移动联', '../img/c16.jpg', '1999.00', '1243', '2018-08-25 17:27:41');
INSERT INTO `goodslists` VALUES ('17', '【现货包邮送礼包】魅蓝 Note6 3+32G运行 全网通 移动联通', '../img/c17.jpg', '666.00', '12432', '2018-08-25 17:27:43');
INSERT INTO `goodslists` VALUES ('18', '【顺丰包邮送壳膜】华为 麦芒 6 全网通 4GB+64GB版 移动联', '../img/c18.jpg', '1269.00', '212', '2018-08-25 17:27:45');
INSERT INTO `goodslists` VALUES ('19', '【包邮送壳膜】荣耀9青春版 4+32/64GB 移动联通电信', '../img/c19.jpg', '949.00', '214', '2018-08-25 17:27:47');
INSERT INTO `goodslists` VALUES ('20', '【现货包邮送壳膜】华为 nova 3e 4+64/128G 全网通版 全面', '../img/c20.jpg', '1558.00', '1241', '2018-08-25 17:27:51');

-- ----------------------------
-- Table structure for reg
-- ----------------------------
DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reg
-- ----------------------------
INSERT INTO `reg` VALUES ('1', 'lemon1', '123456', '2018-08-25 14:50:44');
INSERT INTO `reg` VALUES ('2', 'lemon', '123456', '2018-08-25 14:51:02');
INSERT INTO `reg` VALUES ('3', 'laoxie', '123456', '2018-08-25 14:51:25');
INSERT INTO `reg` VALUES ('4', 'wwww', '123456', '2018-08-25 14:52:31');
INSERT INTO `reg` VALUES ('5', 'lemon2', '123456', '2018-08-25 14:53:09');
INSERT INTO `reg` VALUES ('6', 'lemon16', '123456', '2018-08-25 14:53:34');
INSERT INTO `reg` VALUES ('7', 'laoxie2', '123456', '2018-08-25 14:54:01');
INSERT INTO `reg` VALUES ('8', 'laoxie2', '123456', '2018-08-25 14:54:12');
INSERT INTO `reg` VALUES ('9', '87654', '123456', '2018-08-25 14:54:26');
INSERT INTO `reg` VALUES ('10', 'laoxie11', '123456', '2018-08-25 14:55:07');
INSERT INTO `reg` VALUES ('11', 'rtewt', '1234', '2018-08-25 15:16:12');
INSERT INTO `reg` VALUES ('12', 'lemon19', 'qqqqqa12', '2018-08-25 15:17:19');
INSERT INTO `reg` VALUES ('13', 'sadasdasf', 'asdasf31212', '2018-08-25 15:19:28');
INSERT INTO `reg` VALUES ('14', 'lemon155', '123456', '2018-08-25 15:20:44');
INSERT INTO `reg` VALUES ('15', 'etdugihoj', 'retyuki', '2018-08-25 15:21:46');
INSERT INTO `reg` VALUES ('16', 'dssafc', '123456', '2018-08-27 19:22:37');
INSERT INTO `reg` VALUES ('17', 'efwdsacew', 'fwecaf', '2018-08-27 19:27:48');
SET FOREIGN_KEY_CHECKS=1;
