export interface UserModel {
  id:  string
  accountBalance: string
  accountNumber: string
  createdAt: string
  education: {}
    duration: string
    emploeymentStatus: string
    level: string
    loanRepayment: string
    officeEmail: string
    sector: string
    monthlyIncome: {}
  lastActiveDate: Date
  guarantor: []
    address: string
    firstName: string
    gender: string
    lastName: string
  email: string
  orgName: string
  userName: string
  DateJoined: string
  phoneNumber: number
  profile: {}
    avatar: string
    bvn: string
    currency: string
  socials: {}
    facebook: string
    instagram: string
    twitter: string

  // id: number | string
  // accountBalance: string
  // accountNumber: string
  // createdAt: Date
  // education: {}
  //   duration: string
  //   emploeymentStatus: string
  //   level: string
  //   loanRepayment: string
  //   officeEmail: string
  //   sector: string
  //   monthlyIncome: []
  // lastActiveDate: Date
  // guarantor: {}
  //   address: string
  //   firstName: string
  //   gender: string
  //   lastName: string
  //   phoneNumber: string

  // email: string
  // orgName: string
  // userName: string
  // DateJoined: string
  // phoneNumber: number
  // profile: {}
  //   address: string
  //   avatar: string
  //   bvn: string
  //   currency: string
  //   firstName: string
  //   gender: string
  //   lastName: string
  //   phoneNumber: number
  // socials: {}
  //   facebook: string
  //   instagram: string
  //   twitter: string
  }