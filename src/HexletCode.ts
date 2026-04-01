class HexletCode {
  // data - пример { name: 'rob', job: 'hexlet', gender: 'm' }
  // options - пример { method: 'post' }
  // callback - пример (f) => { 
  //  f.input('name')
  //  f.input('job', { as: 'textarea' })
  //  f.submit('Wow')
  // }
  static formFor(data: any, options: any, callback: any) {
    return callback(data, options)
  }

}

export default HexletCode
