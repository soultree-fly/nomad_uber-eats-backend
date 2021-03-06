import { InputType, OmitType } from '@nestjs/graphql';

import { Restaurant } from '../entities/restaurant.entity';

@InputType()
export class CreateRestaurnatDto extends OmitType(
  Restaurant,
  ['id'] as const,
  InputType,
) {}
