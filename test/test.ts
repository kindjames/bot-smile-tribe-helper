import test from 'ava'
import { downloadJson, report } from '../src/lib/utils'

const bot = ''
const token = '681530398:AAHQD328nUCcH-QDO10cV8qg-bhXX92APeU'

//const url = `https://api.telegram.org/${bot}:${token}/getMe`
const url = `https://api.telegram.org/bot${token}/getMe`

test('it prints', async t => {
  const result = await downloadJson(url)
    .then(report('response'))

  t.pass()
})
