import { Test, TestingModule } from '@nestjs/testing';
import { GroupCollectionController } from './group-collection.controller';

describe('GroupCollection Controller', () => {
  let controller: GroupCollectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupCollectionController],
    }).compile();

    controller = module.get<GroupCollectionController>(GroupCollectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
