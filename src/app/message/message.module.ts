import {HttpModule, Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {HomeModule} from '../home/home.module';
import {UserModule} from '../user/user.module';
import {DateScalar} from './date.scalar';
import {MessageBuffer} from './message.buffer';
import {MessageCron} from './message.cron';
import {messageProviders} from './message.providers';
import {ConversationResolver} from './resolvers/conversation.resolver';
import {MessageResolver} from './resolvers/message.resolver';
import {UserConversationResolver} from './resolvers/user-conversation.resolver';
import {ConversationService} from './services/conversation.service';
import {MessageService} from './services/message.service';
import {SubscriptionsService} from './services/subscriptions.service';
import {UserConversationService} from './services/user-conversation.service';
import {MessageVoter} from './security/message.voter';
import {MessageController} from './message.controller';
import {UserConversationVoter} from './security/user-conversation.voter';


@Module({
	controllers: [
		MessageController
	],
	providers: [
		...messageProviders,
		DateScalar,
		MessageService,
		ConversationService,
		UserConversationService,
		MessageResolver,
		MessageBuffer,
		MessageCron,
		UserConversationResolver,
		ConversationResolver,
		SubscriptionsService,
		MessageVoter,
		UserConversationVoter
	],
	imports: [HttpModule, DatabaseModule, UserModule, HomeModule],
	exports: [MessageService, ConversationService, UserConversationService, SubscriptionsService]
})
export class MessageModule {
}
