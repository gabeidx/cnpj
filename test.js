import test from 'ava'
import CNPJ from './src/index.js'

test('valid formatted CNPJs', t => {
  t.is(CNPJ.validate('51.878.216/0001-95'), true)
  t.is(CNPJ.validate('87.344.783/0001-09'), true)
})

test('valid unformatted CNPJs', t => {
  t.is(CNPJ.validate(15548368000166), true)
  t.is(CNPJ.validate('95241373000160'), true)
})

test('valid mixed string with non numeric characters', t => {
  t.is(CNPJ.validate('abcd11333977000147efgh'), true)
  t.is(CNPJ.validate('76aaa.bbb182ccc.ddd634eee/fff0001ggg-74'), true)
})

test('invalid formatted CNPJs', t => {
  t.is(CNPJ.validate('51.878.216/0001-11'), false)
  t.is(CNPJ.validate('87.344.783/0001-99'), false)
})

test('invalid unformatted CNPJs', t => {
  t.is(CNPJ.validate(15541368000126), false)
  t.is(CNPJ.validate('45241173000169'), false)
})

test('invalid sequential CNPJs', t => {
  t.is(CNPJ.validate('11.111.111/1111-11'), false)
  t.is(CNPJ.validate('22.222.222/2222-22'), false)
  t.is(CNPJ.validate('33.333.333/3333-33'), false)
  t.is(CNPJ.validate('44.444.444/4444-44'), false)
  t.is(CNPJ.validate('55.555.555/5555-55'), false)
  t.is(CNPJ.validate(66666666666666), false)
  t.is(CNPJ.validate(77777777777777), false)
  t.is(CNPJ.validate(88888888888888), false)
  t.is(CNPJ.validate(99999999999999), false)
  t.is(CNPJ.validate('00000000000000'), false)
})
