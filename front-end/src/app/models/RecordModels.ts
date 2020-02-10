export class RecordModel
{
	temperature: number;
	humidity: number;
	gps: GPS;
	userId: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}


export class GPS
{
	lat: number;
	long: number;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}
