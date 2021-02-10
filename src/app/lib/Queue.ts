import Queue from 'bull'
import redisConfig from '../../config/redis'

import RegistrationMail from '../jobs/RegistrationEmail'

const mailQueue = new Queue<any>(RegistrationMail.key, redisConfig as any)

export default mailQueue