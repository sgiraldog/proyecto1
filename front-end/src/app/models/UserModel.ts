export class UserModel
{
	userId: string;
	username: string;
	email: string;
	password: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}


