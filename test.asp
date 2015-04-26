<html>
<body>

<% 

	dim s
	s=Request.QueryString("undercity") 
	Response.Write(s)
	set fs=Server.CreateObject("Scripting.FileSystemObject") 'Crea la instancia FSO'
	if s<>"" then
		set f=fs.OpenTextFile(Server.MapPath("rds.txt"),2,true) 'abre el txt o lo crea si no existe, 2=escritura, unicode'
		f.WriteLine(s)
		f.Close
		Set f=Nothing
	else
		if (fs.FileExists(Server.MapPath("rds.txt")))=true then 'control de existenica del txt'
		  set f=fs.OpenTextFile(Server.MapPath("rds.txt"),1) 'abre el txt o lo crea si no existe, 1=lectura'
		  Response.Write("On air: "+f.ReadAll) 'ERROR: archivo esta vacio'
		  f.Close
		  Set f=Nothing 
		end if
	end if
	set fs=Nothing 
%>
</body>
</html>  