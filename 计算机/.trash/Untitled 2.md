- 上传病历
- `Method`：POST
- `Params`：
```Json
{
	id_card: str
    userName: str
    doctorName: str
    hospitalName: str
    advice: str
    diagnosis: str
    drug: str
    inHospital: str
    careStatus: str
    timestamp: str
    signData: str
    signKey: str
    signPubKeys: str
    treatmentDate: str
    img: str
}
```
- `Response`:
```Json
{
	code: int,
	msg: str,
	data: {
		...
		addr: str,
		...
	}
}
```

- 获取病历
- `Method`: GET
- `Param`: `addr` 病历地址
- `Response`:
```Json
{
	code: int,
	msg: str,
	data: traverse
}
```