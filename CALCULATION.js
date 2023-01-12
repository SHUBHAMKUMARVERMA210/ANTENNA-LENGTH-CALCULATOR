let Frequency=document.getElementById('INPUT_FREQUENCY');
let AntennaLength=document.getElementById('INPUT_ANTENNA_LENGTH');
let DipoleLegLength=document.getElementById('INPUT_DIPOLE_LEG_LENGTH');
let Wavelength=document.getElementById('INPUT_WAVELENGTH');
let HalfWavelength=document.getElementById('INPUT_HALF_WAVELENGTH');
let QuaterWavelength=document.getElementById('INPUT_QUATER_WAVELENGTH');
let InputFrequencyType=document.getElementById('INPUT_FREQUENCY_TYPE');
let InputAntennaLengthType=document.getElementById('INPUT_ANTENNA_LENGTH_TYPE');
let DipoleLegLengthType=document.getElementById('INPUT_DIPOLE_LEG_LENGTH_TYPE');
let WavelengthType=document.getElementById('INPUT_WAVELENGTH_TYPE');
let HalfWavelengthType=document.getElementById('INPUT_HALF_WAVELENGTH_TYPE');
let QuaterWavelengthType=document.getElementById('INPUT_QUATER_WAVELENGTH_TYPE');

Frequency.addEventListener("keyup",frequencyresult);
AntennaLength.addEventListener("keyup",AntennaLengthResult);
DipoleLegLength.addEventListener("keyup",DipoleLegLengthResult);
Wavelength.addEventListener("keyup",WavelengthResult);
HalfWavelength.addEventListener("keyup",HalfWavelengthResult);
QuaterWavelength.addEventListener("keyup",QuaterWavelengthResult);

function frequencyresult()
{
    if(InputFrequencyType.value==='hertz')
    {
        Frequency.value=Number(Frequency.value)*1;
    }
    else if(InputFrequencyType.value==='kilohertz')
    {
        Frequency.value=Number(Frequency.value)*0.001;
    }
    else if(InputFrequencyType.value==='megahertz')
    {
        Frequency.value=Number(Frequency.value)*0.000001;
    }
    else if(InputFrequencyType.value==='gigahertz')
    {
        Frequency.value=Number(Frequency.value)*0.000000001;
    }
    else if(InputFrequencyType.value==='terahertz')
    {
        Frequency.value=Number(Frequency.value)*0.000000000001;
    }
    else if(InputFrequencyType.value==='revolutionsperminute')
    {
        Frequency.value=Number(Frequency.value)*60;
    }
    AntennaLength.value=Frequency.value/468;
    DipoleLegLength.value=AntennaLength.value/2;
    Wavelength.value=299792458/Frequency.value;
    HalfWavelength.value=1/2*Wavelength.value;
    QuaterWavelength.value=1/4*Wavelength.value;
}


function AntennaLengthResult()
    {
        if(InputAntennaLengthType.value==='meters')
    {
        AntennaLength.value=Number(AntennaLength.value)*1;
    }
    else if(InputAntennaLengthType.value==='centimeters')
    {
        AntennaLength.value=Number(AntennaLength.value)*100;
    }
    else if(InputAntennaLengthType.value==='millimeters')
    {
        AntennaLength.value=Number(AntennaLength.value)*1000;
    }
    else if(InputAntennaLengthType.value==='kilometers')
    {
        AntennaLength.value=Number(AntennaLength.value)*0.001;
    }
    else if(InputAntennaLengthType.value==='inches')
    {
        AntennaLength.value=Number(AntennaLength.value)*39.3701;
    }
    else if(InputAntennaLengthType.value==='feet')
    {
        AntennaLength.value=Number(AntennaLength.value)*3.28084;
    }
    else if(InputAntennaLengthType.value==='yards')
    {
        AntennaLength.value=Number(AntennaLength.value)*1.09361;
    }
    else if(InputAntennaLengthType.value==='miles')
    {
        AntennaLength.value=Number(AntennaLength.value)*0.000621371;
    }
    else if(InputAntennaLengthType.value==='nauticalmiles')
    {
        AntennaLength.value=Number(AntennaLength.value)*0.000539957;
    }
    else if(InputAntennaLengthType.value==='feetbyinches')
    {
        AntennaLength.value=Number(AntennaLength.value)*3.28084/39.3701;
    }
    else if(InputAntennaLengthType.value==='metersbycentimeters')
    {
        AntennaLength.value=Number(AntennaLength.value)*1/100;
    }
    Frequency.value=AntennaLength.value*468;
    DipoleLegLength.value=AntennaLength.value/2;
    Wavelength.value=299792458/Frequency.value;
    HalfWavelength.value=1/2*Wavelength.value;
    QuaterWavelength.value=1/4*Wavelength.value;
    }


function DipoleLegLengthResult()
{
    if(DipoleLegLengthType.value==='meters')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*1;
    }
    else if(DipoleLegLengthType.value==='centimeters')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*100;
    }
    else if(DipoleLegLengthType.value==='millimeters')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*1000;
    }
    else if(DipoleLegLengthType.value==='kilometers')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*0.001;
    }
    else if(DipoleLegLengthType.value==='inches')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*39.3701;
    }
    else if(DipoleLegLengthType.value==='feet')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*3.28084;
    }
    else if(DipoleLegLengthType.value==='yards')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*1.09361;
    }
    else if(DipoleLegLengthType.value==='miles')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*0.000621371;
    }
    else if(DipoleLegLengthType.value==='nauticalmiles')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*0.000539957;
    }
    else if(DipoleLegLengthType.value==='feetbyinches')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*3.28084/39.3701;
    }
    else if(DipoleLegLengthType.value==='metersbycentimeters')
    {
        DipoleLegLength.value=Number(DipoleLegLength.value)*1/100;
    }

    AntennaLength.value=DipoleLegLength*2;
    Frequency.value=AntennaLength*468;
    DipoleLegLength.value=AntennaLength.value/2;
    Wavelength.value=299792458/Frequency.value;
    HalfWavelength.value=1/2*Wavelength.value;
    QuaterWavelength.value=1/4*Wavelength.value;
}


function WavelengthResult()
{
    if(WavelengthType.value==='meters')
    {
        Wavelength.value=Number(Wavelength.value)*1;
    }
    else if(WavelengthType.value==='centimeters')
    {
        Wavelength.value=Number(Wavelength.value)*100;
    }
    else if(WavelengthType.value==='millimeters')
    {
        Wavelength.value=Number(Wavelength.value)*1000;
    }
    else if(WavelengthType.value==='kilometers')
    {
        Wavelength.value=Number(Wavelength.value)*0.001;
    }
    else if(WavelengthType.value==='inches')
    {
        Wavelength.value=Number(Wavelength.value)*39.3701;
    }
    else if(WavelengthType.value==='feet')
    {
        Wavelength.value=Number(Wavelength.value)*3.28084;
    }
    else if(WavelengthType.value==='yards')
    {
        Wavelength.value=Number(Wavelength.value)*1.09361;
    }
    else if(WavelengthType.value==='miles')
    {
        Wavelength.value=Number(Wavelength.value)*0.000621371;
    }
    else if(WavelengthType.value==='nauticalmiles')
    {
        Wavelength.value=Number(Wavelength.value)*0.000539957;
    }
    else if(WavelengthType.value==='feetbyinches')
    {
        Wavelength.value=Number(Wavelength.value)*3.28084/39.3701;
    }
    else if(WavelengthType.value==='metersbycentimeters')
    {
        Wavelength.value=Number(Wavelength.value)*1/100;
    }
    Frequency.value=299792458*Frequency.value
    AntennaLength.value=Frequency.value/468;
    DipoleLegLength.value=AntennaLength.value/2;
    HalfWavelength.value=1/2*Wavelength.value;
    QuaterWavelength.value=1/4*Wavelength.value;
}


function HalfWavelengthResult()
{
    if(HalfWavelengthType.value==='meters')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*1;
    }
    else if(HalfWavelengthType.value==='centimeters')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*100;
    }
    else if(HalfWavelengthType.value==='millimeters')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*1000;
    }
    else if(HalfWavelengthType.value==='kilometers')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*0.001;
    }
    else if(HalfWavelengthType.value==='inches')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*39.3701;
    }
    else if(HalfWavelengthType.value==='feet')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*3.28084;
    }
    else if(HalfWavelengthType.value==='yards')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*1.09361;
    }
    else if(HalfWavelengthType.value==='miles')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*0.000621371;
    }
    else if(HalfWavelengthType.value==='nauticalmiles')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*0.000539957;
    }
    else if(HalfWavelengthType.value==='feetbyinches')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*3.28084/39.3701;
    }
    else if(HalfWavelengthType.value==='metersbycentimeters')
    {
        HalfWavelength.value=Number(HalfWavelength.value)*1/100;
    }
    Wavelength.value=HalfWavelength.value*0.5;
    Frequency.value=299792458*Wavelength.value;
    AntennaLength.value=Frequency.value/468;
    DipoleLegLength.value=AntennaLength.value/2;
    QuaterWavelength.value=1/4*Wavelength.value;
}


function QuaterWavelengthResult()
{
    if(QuaterWavelengthType.value==='meters')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*1;
    }
    else if(QuaterWavelengthType.value==='centimeters')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*100;
    }
    else if(QuaterWavelengthType.value==='millimeters')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*1000;
    }
    else if(QuaterWavelengthType.value==='kilometers')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*0.001;
    }
    else if(QuaterWavelengthType.value==='inches')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*39.3701;
    }
    else if(QuaterWavelengthType.value==='feet')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*3.28084;
    }
    else if(QuaterWavelengthType.value==='yards')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*1.09361;
    }
    else if(QuaterWavelengthType.value==='miles')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*0.000621371;
    }
    else if(QuaterWavelengthType.value==='nauticalmiles')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*0.000539957;
    }
    else if(QuaterWavelengthType.value==='feetbyinches')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*3.28084/39.3701;
    }
    else if(QuaterWavelengthType.value==='metersbycentimeters')
    {
        QuaterWavelength.value=Number(QuaterWavelength.value)*1/100;
    }
    
    Wavelength.value=HalfWavelength.value*0.25;
    Frequency.value=299792458*Wavelength.value;
    AntennaLength.value=Frequency.value/468;
    DipoleLegLength.value=AntennaLength.value/2;
    HalfWavelength.value=1/2*Wavelength.value;
}