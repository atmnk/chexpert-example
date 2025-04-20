import { aiTest } from '../fixtures/ai';
aiTest('Sign up to wishmebest app', async ({ ai }) => {
  await ai.do(`navigate to 'https://wishmebest.netlify.app'`)
  await ai.do(`Click on signup button`)
  const d = new Date()
  const username = "user_" + d.getTime()
  await ai.do(`Enter username '${username}'`)
  const password = 'Test1234'
  await ai.do(`Enter password '${password}'`)
  await ai.do(`Enter confirm password ${password}`)
  await ai.do(`Click on signup button`)
  await ai.waitForVisible('Logout')
});
