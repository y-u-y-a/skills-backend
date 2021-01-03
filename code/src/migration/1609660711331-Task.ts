import {MigrationInterface, QueryRunner} from "typeorm";

export class Task1609660711331 implements MigrationInterface {
    name = 'Task1609660711331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `task` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(50) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `task`");
    }

}
