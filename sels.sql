SET FOREIGN_KEY_CHECKS = 0;
/*M!999999\- enable the sandbox mode */ 
INSERT INTO `account` (user_id,role_id,username,password, paradise_id,currency) VALUES
(1,1,'sel','$argon2id$v=19$m=65536,t=3,p=4$HGoK6olcn1qSmEpTaNSwUQ$1CQInO9V42DcGvan36hODZZ90QRu7E7EuR58kp1t6tY',1,0);
INSERT INTO `paradise` VALUES
(1,'sel',NULL);
INSERT INTO `role` VALUES
(1,'player','/sels/profile'),
(2,'admin','/admin'),
(3,'developer','/developer');
INSERT INTO `sel` VALUES
(1,'Firm',1,'#ffffff',1,'2024-11-12 00:00:00',8,0,0,1,1);
INSERT INTO `session` VALUES
('b7cf013c7ee2784899eb01346329b40b36d2b3f1e2dedcd43398a0fe63eb4ce1',1,'2024-11-19 15:06:38.325');
INSERT INTO `sex` VALUES
(1,'Male'),
(2,'Female'),
(3,'Secret third sex');
INSERT INTO `tier` VALUES
(1,'Common'),
(2,'Uncommon'),
(3,'Rare'),
(4,'Epic'),
(5,'Legendary');
INSERT INTO `type` VALUES
(1,'Harp seal'),
(2,'Grey seal'),
(3,'Baikal seal'),
(4,'Elephant seal'),
(5,'Leopard seal'),
(6,'Sea lion'),
(7,'Walrus');
SET FOREIGN_KEY_CHECKS = 1;
