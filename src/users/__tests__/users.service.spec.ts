import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { UsersService } from '../users.service';

const MOCKS = {
  users: null as any,
  user: null as any,
}

const userRepoStub = {
  find: jest.fn(() => MOCKS.users),
  findOne: jest.fn(() => MOCKS.user)
}

describe('UsersService', () => {
  let usersService: UsersService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: userRepoStub,
        }
      ],
    }).compile();

    usersService = moduleFixture.get<UsersService>(UsersService);
  });

  afterEach(() => {
    userRepoStub.find.mockClear();
    userRepoStub.findOne.mockClear();

    MOCKS.user = null;
    MOCKS.users = null;
  });

  afterAll(() => {
    userRepoStub.find.mockRestore();
    userRepoStub.findOne.mockRestore();
  });

  describe('findAll', () => {
    it('should return all found users', async () => {
      MOCKS.users = [new User()]

      const res = await usersService.findAll();
      expect(res).toEqual(MOCKS.users)
    });
  });

  describe('findById', () => {
    const testCallId = 12345;

    it('should return found user', async () => {
      MOCKS.user = new User()

      const res = await usersService.findById(testCallId);
      expect(res).toEqual(MOCKS.user)
    });
  });
});
