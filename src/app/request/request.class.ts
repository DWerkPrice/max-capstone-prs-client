import { User } from '../user/user.class';

export class Requst{
    id: number = 0;
    description: string = 'new';
    justification: string =  '';
    rejectionReason: string = 'denied';
    deliveryMode: string = 'Ground';
    status: string = 'Review';
    total: number = 0; 
    userId?: number = 0; 
    user: User = null;

    constructor(){}
}


