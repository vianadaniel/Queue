import Queue from './app/lib/Queue'

import RegistrationMail from './app/jobs/RegistrationEmail'

Queue.process(RegistrationMail.handle as any)