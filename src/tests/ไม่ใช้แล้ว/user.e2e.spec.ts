// import { test, expect } from '@playwright/test';
// // import { createAPIContext } from '../../helper/api-client';
// // import { getToken } from '../../helper/auth';
// // import { createUser } from '../../services/user.service';
// // import payload from '../../data/payload/create-user.json';

// test('Create user E2E', async () => {
//   const apiContext = await createAPIContext();

//   const token = await getToken(apiContext);

//   const response = await createUser(apiContext, token, payload);

//   expect(response.status()).toBe(201);

//   const body = await response.json();
//   expect(body.email).toBe(payload.email);
// });
