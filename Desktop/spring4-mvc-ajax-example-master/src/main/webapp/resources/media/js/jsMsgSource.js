	var CONTEXT_PATH = ""
	var fcomSysDateFormat = '';
	fcomSysDateFormat = 'dd/MM/yyyy';
	fcomSysDateFormat = fcomSysDateFormat.toUpperCase().replace('yy', '');
	
	var fcomSysTimeFormat = '';
	fcomSysTimeFormat = 'HH:mm:ss';
	
	var fcomSysDatetimeFormat = fcomSysDateFormat + ' ' + fcomSysTimeFormat;

	var fcomSysCurrencyCode	= '';
	fcomSysCurrencyCode = '¥';	
	
	var fcomSysCurrencyFormat	= '';
	fcomSysCurrencyFormat = '#,###.###';
	
	var fcomSysIntegerFormat	= '';
	fcomSysIntegerFormat = '#,###';
	
	var fcomSysDecimalFormat	= '';
	fcomSysDecimalFormat = '#,###.###';
	var fcomMsgSource = {
	"inf.sys.0001":"{0} items found.","inf.sys.0007":"{0} inactivated successfully.","inf.sys.0006":"{0} saved successfully.","inf.sys.0009":"{0} generated successfully.","inf.sys.0008":"{0} activated successfully.","inf.sys.0003":"{0} modified successfully.","inf.sys.0002":"{0} registered successfully.","inf.sys.0005":"{0} copied successfully.","inf.sys.0004":"{0} deleted successfully.","err.sys.0111":"Design status of {0} [{1}] is fixed design, do not allow this action.","err.sys.0110":"{0} can not working with current project ","err.sys.0115":"The decimal value of {0} at line {2} must be less than or equal to {1}.","err.sys.0114":"The decimal value of {0} at line {2} must be greater than or equal to {1}","err.sys.0113":"The decimal value of {0} must be less than or equal to {1}.","err.sys.0112":"The decimal value of {0} must be greater than or equal to {1}","err.sys.0119":"{0} at panel {1} is required.","err.sys.0118":"{0} is QP Common. ","err.sys.0117":"You must change all design status of child function in {0} to fixed design","err.sys.0116":"You must select at least one {0}","err.sys.0122":"Unhandled System Error!","err.sys.0121":"Unhandled system error occurred!","err.sys.0120":"{0} at line {1} of panel {2} is required","err.sys.0125":"Download fail.","err.sys.0124":"{0} at line {1} must be {2}.","err.sys.0123":"{0} at line {1} does not exist.","err.sys.0100":"{0} must be a numeric","err.sys.0104":"{0} must have at least one element","err.sys.0103":"{0} is in the range {1} through {2}.","err.sys.0102":"Cannot delete [{0}]. Module [{1}] have [{2}] reference to this. ","err.sys.0101":"Cannot modify [{0}]. A table reference to this [{1}] have [{0}] with difference value. ","err.sys.0108":"[{0}]  The size of {1} at line {2} must be between {3} and {4}.","err.sys.0107":"[{0}] {1} at line {2} must start with a letter and cannot contain any of the following characters: &quot;{3}&quot;.","err.sys.0106":"[{0}] {1} at line {2} is duplicated.","err.sys.0105":"Project was changed!","err.sys.0109":"Design status of &quot;{0}&quot; is fixed design, do not allow this action.","inf.sys.0010":"{0} exported successfully","inf.sys.0012":"{0} upload successfully","inf.sys.0011":"{0} imported successfully","inf.sys.0018":"Do you want to modify data?","inf.sys.0017":"Do you want to inactivate data?","inf.sys.0019":"Do you want to print data?","inf.sys.0014":"Do you really want to delete data?","inf.sys.0013":"No items found.","inf.sys.0016":"Do you want to activate data?","inf.sys.0015":"Do you want to save current data?","inf.sys.0021":"Do you want to dowload data?","inf.sys.0020":"Do you want to upload data?","inf.sys.0023":"Do you want to import data?","inf.sys.0022":"Do you want to export data?","inf.sys.0029":"System will redirect to home page. Do you want to change language?","inf.sys.0028":"Data in this page was changed. Do you want to discard and leave?","inf.sys.0025":"Do you want to generate data?","inf.sys.0024":"Do you want to copy data?","inf.sys.0027":"Do you want to discard current data and back to previous window?","inf.sys.0026":"Data in this page was changed. Please discard and reload again.","inf.sys.0032":"Do you want to discard current data and go to new window?","inf.sys.0031":"System is busy, please try the service again later.","inf.sys.0034":"Do you want to DELETE Module and all children design information of this ?","inf.sys.0033":"(Regenerate source code and document of all business logics)","inf.sys.0030":"Page not found. Server can not find the page you requested.","inf.sys.0039":"Do you really want to convert this to advanced?","inf.sys.0036":"Do you want to modify status of design?","inf.sys.0035":"Do you want to translate data ?","inf.sys.0038":"Do you really want to replace current data?","inf.sys.0037":"Reload message for system successfully.","inf.sys.0040":"Please choose entity for generating data.","err.sys.0070":"{0} must be false","err.sys.0074":"Design information does not belong working project, do not allow this action.","err.sys.0073":"{0} deleted fail.","err.sys.0072":"{0} modified fail.","err.sys.0071":"{0} must be true","err.sys.0078":"{0} at line {3} is not in the range {1} through {2}.","err.sys.0077":"{0} at line {1} is required.","err.sys.0076":"{0} at line {1} is an invalid e-mail address.","err.sys.0075":"{0} already exists","err.sys.0079":"{0} at line {1} can not be blank","err.sys.0081":"{0} at line {1} is an invalid credit card NUMERIC.","err.sys.0080":"{0} at line {1} must be a valid URL","err.sys.0085":"{0} at line {2} must be greater than or equal to {1}","err.sys.0084":"{0} at line {2} must be less than or equal to {1}.","err.sys.0083":"{0} at line {1} must be true","err.sys.0082":"{0} at line {1} must be false","err.sys.0088":"Length of {0} at line {3} must be between {1} and {2}.","err.sys.0087":"The value of {0} at line {1} must be in the future.","err.sys.0086":"The value of {0} at line {3} is out of bounds (<{1} digits>.<{2} digits> expected)","sc.sys.0056":"Processing…","err.sys.0052":"Resource not found.","sc.sys.0057":"See all problem","err.sys.0051":"{0} of {1} is required.","sc.sys.0058":"Common","err.sys.0050":"{0} must be less than or equal to {1}.","sc.sys.0059":"Table type","err.sys.0056":"Missing CSRF detected!","err.sys.0055":"Access Denied detected!","err.sys.0054":"CSRF attack detected!","err.sys.0053":"Illegal screen flow detected!","err.sys.0059":"Data Access error!","err.sys.0057":"Business error occurred!","sc.sys.0063":"Short","sc.sys.0064":"Integer","sc.sys.0065":"Long","sc.sys.0066":"Float","sc.sys.0060":"Entity","sc.sys.0061":"Object","sc.sys.0062":"Byte","err.sys.0063":"{0} must be null.","sc.sys.0067":"Double","err.sys.0062":"{0} can not be null .","sc.sys.0068":"Char","err.sys.0061":"{0} can not be blank","sc.sys.0069":"Boolean","err.sys.0060":"{0} must be a valid URL","err.sys.0067":"Length of {0} must be between {1} and {2}.","err.sys.0066":"{0} must start with a letter and cannot contain any of the following characters: &quot;{1}&quot;.","err.sys.0065":"The value of {0} must be in the past.","err.sys.0064":"The size of {0} must be between {1} and {2}.","err.sys.0069":"The value of {0} is out of bounds (<{1} digits>.<{2} digits> expected)","err.sys.0068":"The value of {0} must be in the future.","sc.sys.0074":"Time","sc.sys.0075":"Date","sc.sys.0076":"Submit","sc.sys.0070":"String","sc.sys.0071":"BigDecimal","sc.sys.0072":"Timestamp","sc.sys.0073":"Datetime","err.sys.0030":"{0} must be a positive integer.","err.sys.0034":"{1} line {0} contains prohibited character: {2}","err.sys.0033":"{0} contains prohibited character: {1}","err.sys.0032":"{1} line {0}, please enter half-width alphanumeric value.","err.sys.0031":"Please enter half-width alphanumeric value in {0}.","err.sys.0038":"You are not authorized to access.","err.sys.0037":"{0} does not exist.","err.sys.0036":"{0} is duplicated.","err.sys.0035":"Enter single byte character for {0}.","err.sys.0039":"System error. Please contact to your system administrtor.","err.sys.0041":"{0} at line {1} is duplicated.","err.sys.0040":"Length of characters for {0} must be or less than {1} ","err.sys.0045":"Please input correct username and password to login.","err.sys.0044":"{0} deleted unsuccessfully.","err.sys.0043":"{0} generated failure.","err.sys.0042":"{0} must be greater than or equal to {1}","err.sys.0049":"{0} date must be greater than or equal now.","err.sys.0048":"Concurrence error. Current data was modified by other user, please save data again.","err.sys.0047":"At line {0}, data does not exist.","err.sys.0046":"{0} updated unsuccessfully.","err.sys.0012":"{0} is an invalid e-mail address.","err.sys.0011":"{1} line {0}, please enter NUMERIC value between {2} and {3}.","err.sys.0010":"{1} line {0}, please enter NUMERIC value.","err.sys.0016":"{1} line {0}, please enter integer value.","err.sys.0015":"{0} must be an integer.","err.sys.0014":"{1} line {0}, please enter the value in the range of {2} to {3}.","err.sys.0013":"{0} must be a float.","err.sys.0019":"{0} must be a long.","err.sys.0018":"{0} is invalid.","err.sys.0023":"{0} line {1} can not be less than {2} characters.","err.sys.0022":"{0} can not be less than {1} characters.","err.sys.0021":"Length of {0} line {1} must be less than {2}.","err.sys.0020":"Length of {0} must be less than {1}.","err.sys.0027":"{0} must be a short.","err.sys.0026":"{1} line {0} is required.","err.sys.0025":"{0} is required.","err.sys.0024":"{0} is not in the range {1} through {2}.","err.sys.0029":"{0} must be a positive number.","err.sys.0028":"{1} line {0} must be a positive integer.","sc.sys.0005":"Register","sc.sys.0006":"Modify","sc.sys.0007":"View","sc.sys.0008":"Delete","sc.sys.0001":"Search","sc.sys.0002":"Search condition","sc.sys.0003":"Search results","sc.sys.0004":"No.","err.sys.0001":"{0} must be a byte.","sc.sys.0009":"True","err.sys.0005":"{0} is not a date.","err.sys.0004":"{0} is an invalid credit card NUMERIC.","err.sys.0003":"{1} line {0}, please enter between {2} and {3}.","err.sys.0002":"{1} line {0}, please enter byte value.","err.sys.0009":"{0} must be a double.","err.sys.0008":"{1} line {0}, please enter a date between {2} and {3}.","err.sys.0007":"{0} is invalid date. Please enter a date between {1} and {2}.","err.sys.0006":"{1} line {0} is wrong date format.","sc.sys.0010":"False","sc.sys.0011":"Yes","sc.sys.0038":"Confirm message","sc.sys.0039":"Alphanumeric","sc.sys.0034":"Search…","sc.sys.0035":"Close","sc.sys.0036":"Delete complete","sc.sys.0037":":","sc.sys.0049":"Back","sc.sys.0052":"Delete All","sc.sys.0053":"Modify complete","sc.sys.0054":"OK","sc.sys.0055":"Design status","sc.sys.0050":"Confirm","sc.sys.0051":"Complete","sc.sys.0016":"Sort","sc.sys.0017":"Copy","sc.sys.0018":"Import","sc.sys.0019":"Export","sc.sys.0012":"No","sc.sys.0013":"Add","sc.sys.0014":"Remove","sc.sys.0015":"Move","sc.sys.0020":"Download","sc.sys.0021":"Upload","sc.sys.0022":"Print","sc.sys.0027":"Status","sc.sys.0028":"Remark","sc.sys.0029":"(*)","sc.sys.0023":"Cancel","sc.sys.0024":"Generate","sc.sys.0025":"Show","sc.sys.0026":"Setting","sc.sys.0030":"-- Select --","sc.sys.0031":"Save","sc.sys.0032":"Reset","sc.sys.0033":"records","sc.sys.js.0001":"January","sc.sys.js.0002":"February","sc.sys.js.0003":"March","sc.sys.js.0004":"April","sc.sys.js.0005":"May","sc.sys.js.0006":"June","sc.sys.js.0007":"July","sc.sys.js.0008":"August","sc.sys.js.0009":"September","sc.sys.js.0010":"October","sc.sys.js.0011":"November","sc.sys.js.0012":"December","sc.sys.js.0013":"Jan","sc.sys.js.0014":"Feb","sc.sys.js.0015":"Mar","sc.sys.js.0016":"Apr","sc.sys.js.0017":"May","sc.sys.js.0018":"Jun","sc.sys.js.0019":"Jul","sc.sys.js.0020":"Aug","sc.sys.js.0021":"Sep","sc.sys.js.0022":"Oct","sc.sys.js.0023":"Nov","sc.sys.js.0024":"Dec","sc.sys.js.0025":"Su","sc.sys.js.0026":"Mo","sc.sys.js.0027":"Tu","sc.sys.js.0028":"We","sc.sys.js.0029":"Th","sc.sys.js.0030":"Fr","sc.sys.js.0031":"Sa","sc.sys.js.0032":"Take Me Home","err.sys.0092":"{0} at line {1} must be null.","err.sys.0091":"{0} at line {1} can not be null .","err.sys.0096":"{0} at line {1} is invalid.","err.sys.0095":"The size of {0} at line {3} must be between {1} and {2}.","err.sys.0094":"{0} at line {2} must start with a letter and cannot contain any of the following characters: &quot;{1}&quot;.","err.sys.0093":"The value of {0} at line {1} must be in the past.","err.sys.0097":"Data is being used by another function. It cannot be deleted."
	}
	
	$.datepicker.regional['en_US']={closeText:fcomMsgSource['sc.sys.js.0001'],prevText:fcomMsgSource['sc.sys.js.0002'],nextText:fcomMsgSource['sc.sys.js.0003'],currentText:fcomMsgSource['sc.sys.js.0004'],monthNames:[fcomMsgSource['sc.sys.js.0005'],fcomMsgSource['sc.sys.js.0006'],fcomMsgSource['sc.sys.js.0007'],fcomMsgSource['sc.sys.js.0008'],fcomMsgSource['sc.sys.js.0009'],fcomMsgSource['sc.sys.js.0010'],fcomMsgSource['sc.sys.js.0011'],fcomMsgSource['sc.sys.js.0012'],fcomMsgSource['sc.sys.js.0013'],fcomMsgSource['sc.sys.js.0014'],fcomMsgSource['sc.sys.js.0015'],fcomMsgSource['sc.sys.js.0016']],monthNamesShort:[fcomMsgSource['sc.sys.js.0017'],fcomMsgSource['sc.sys.js.0018'],fcomMsgSource['sc.sys.js.0019'],fcomMsgSource['sc.sys.js.0020'],fcomMsgSource['sc.sys.js.0021'],fcomMsgSource['sc.sys.js.0022'],fcomMsgSource['sc.sys.js.0023'],fcomMsgSource['sc.sys.js.0024'],fcomMsgSource['sc.sys.js.0025'],fcomMsgSource['sc.sys.js.0026'],fcomMsgSource['sc.sys.js.0027'],fcomMsgSource['sc.sys.js.0028']],dayNames:[fcomMsgSource['sc.sys.js.0029'],fcomMsgSource['sc.sys.js.0030'],fcomMsgSource['sc.sys.js.0031'],fcomMsgSource['sc.sys.js.0032'],fcomMsgSource['sc.sys.js.0033'],fcomMsgSource['sc.sys.js.0034'],fcomMsgSource['sc.sys.js.0035']],dayNamesShort:[fcomMsgSource['sc.sys.js.0036'],fcomMsgSource['sc.sys.js.0037'],fcomMsgSource['sc.sys.js.0038'],fcomMsgSource['sc.sys.js.0039'],fcomMsgSource['sc.sys.js.0040'],fcomMsgSource['sc.sys.js.0041'],fcomMsgSource['sc.sys.js.0042']],dayNamesMin:[fcomMsgSource['sc.sys.js.0043'],fcomMsgSource['sc.sys.js.0044'],fcomMsgSource['sc.sys.js.0045'],fcomMsgSource['sc.sys.js.0046'],fcomMsgSource['sc.sys.js.0047'],fcomMsgSource['sc.sys.js.0048'],fcomMsgSource['sc.sys.js.0049']],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
	