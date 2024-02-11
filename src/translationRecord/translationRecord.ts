export class translationRecord {
    /**
     * 
  `id` bigint NOT NULL AUTO_INCREMENT,
  `create_time` date DEFAULT NULL,
  `article_id` bigint DEFAULT NULL,
  `origin_statement` text,
  `result` text,
  `user_id` bigint DEFAULT NULL,
     */
    constructor(
        public id: number,
        public createTime: Date,
        public articleId: number,
        public originStatement:string,
        public result: string,
        public userId: string
    ) {}
}
  