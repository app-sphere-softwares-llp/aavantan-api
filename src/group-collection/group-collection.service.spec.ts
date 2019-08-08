import { Test, TestingModule } from '@nestjs/testing';
import { GroupCollectionService } from './group-collection.service';

describe('GroupCollectionService', () => {
  let service: GroupCollectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupCollectionService],
    }).compile();

    service = module.get<GroupCollectionService>(GroupCollectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
