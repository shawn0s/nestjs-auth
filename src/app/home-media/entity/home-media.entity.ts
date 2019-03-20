import {ApiModelProperty} from '@nestjs/swagger';
import {IsNumber, IsString} from 'class-validator';
import {ExtendedEntity} from '../../_helpers/entity';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class HomeMediaEntity extends ExtendedEntity {

	@ApiModelProperty()
	@PrimaryGeneratedColumn()
	id: string;

	@ApiModelProperty()
	@IsString()
	@Column()
	homeId: string;

	@ApiModelProperty()
	@IsString()
	@Column()
	originalname: string;

	@ApiModelProperty()
	@IsString()
	@Column()
	mimetype: string;

	@ApiModelProperty()
	@IsNumber()
	@Column()
	size: number;

	@ApiModelProperty()
	@IsString()
	@Column()
	url: string;
}
