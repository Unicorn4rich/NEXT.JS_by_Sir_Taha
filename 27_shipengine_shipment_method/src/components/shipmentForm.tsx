'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, User, Building, Phone, MapPin, Package, Weight, Ruler } from 'lucide-react'
import { postReq } from '@/services/shipmentApi'




export default function ShipmentForm() {


  // Shipment state
  const [carrierId, setCarrierId] = useState('se-1587135')
  const [serviceCode, setServiceCode] = useState<string>('usps_priority_mail')

  // Ship To state
  const [shipToName, setShipToName] = useState('')
  const [shipToPhone, setShipToPhone] = useState('')
  const [shipToAddress, setShipToAddress] = useState('')
  const [shipToCity, setShipToCity] = useState('')
  const [shipToState, setShipToState] = useState('')
  const [shipToPostalCode, setShipToPostalCode] = useState('')
  const [shipToCountryCode, setShipToCountryCode] = useState('US')
  const [shipToResidential, setShipToResidential] = useState('yes')

  // Ship From state
  const [shipFromName, setShipFromName] = useState('')
  const [shipFromCompany, setShipFromCompany] = useState('')
  const [shipFromPhone, setShipFromPhone] = useState('')
  const [shipFromAddress, setShipFromAddress] = useState('')
  const [shipFromCity, setShipFromCity] = useState('')
  const [shipFromState, setShipFromState] = useState('')
  const [shipFromPostalCode, setShipFromPostalCode] = useState('')
  const [shipFromCountryCode, setShipFromCountryCode] = useState('US')
  const [shipFromResidential, setShipFromResidential] = useState('no')

  // Package state
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const [length, setLength] = useState('')

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()


    const submitData = {  // form se li gai values ko post method mein bheja jaa rha hai.
      to_name: shipToName,
      to_phone: shipToPhone,
      to_address: shipToAddress,
      to_city: shipToCity,
      to_state: shipToState,
      to_postal: shipToPostalCode,
      to_country: shipToCountryCode,
      to_residential: shipToResidential,
    }

    await postReq(submitData)  // from typscript file POST Fetch function or ye input mein li gaivalues ko fetch function mein bhej rha hai.
  }


  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-xl">
      <Card className="border-2 border-blue-200 shadow-md">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500">
          <CardTitle className="text-white text-2xl">Shipment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="carrier_id" className="text-blue-700">Carrier ID</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-300 bg-blue-50 text-blue-500">
                  <Truck className="h-5 w-5" />
                </span>
                <Input
                  id="carrier_id"
                  value={carrierId}
                  onChange={(e) => setCarrierId(e.target.value)}
                  className="rounded-l-none border-blue-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="service_code" className="text-blue-700">Service Code</Label>
              <Select value={serviceCode} onValueChange={setServiceCode}>
                <SelectTrigger className="w-full border-blue-300 focus:ring-blue-500 focus:border-blue-500">
                  <SelectValue placeholder="Select service code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usps_priority_mail">USPS Priority Mail</SelectItem>
                  <SelectItem value="usps_first_class_mail">USPS First Class Mail</SelectItem>
                  <SelectItem value="ups_ground">UPS Ground</SelectItem>
                  <SelectItem value="fedex_ground">FedEx Ground</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>


      <Card className="border-2 border-indigo-200 shadow-md">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500">

          <CardTitle className="text-white text-2xl">Ship To</CardTitle>

        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">

            <div className="space-y-2">
              <Label htmlFor="ship_to_name" className="text-indigo-700">Name</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-indigo-300 bg-indigo-50 text-indigo-500">
                  <User className="h-5 w-5" />
                </span>
                <Input
                  id="ship_to_name"
                  value={shipToName}
                  onChange={(e) => setShipToName(e.target.value)}
                  className="rounded-l-none border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ship_to_phone" className="text-indigo-700">Phone</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-indigo-300 bg-indigo-50 text-indigo-500">
                  <Phone className="h-5 w-5" />
                </span>
                <Input
                  id="ship_to_phone"
                  value={shipToPhone}
                  onChange={(e) => setShipToPhone(e.target.value)}
                  className="rounded-l-none border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ship_to_address" className="text-indigo-700">Address</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-indigo-300 bg-indigo-50 text-indigo-500">
                <MapPin className="h-5 w-5" />
              </span>
              <Input
                id="ship_to_address"
                value={shipToAddress}
                onChange={(e) => setShipToAddress(e.target.value)}
                className="rounded-l-none border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ship_to_city" className="text-indigo-700">City</Label>
              <Input
                id="ship_to_city"
                value={shipToCity}
                onChange={(e) => setShipToCity(e.target.value)}
                className="border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ship_to_state" className="text-indigo-700">State</Label>
              <Input
                id="ship_to_state"
                value={shipToState}
                onChange={(e) => setShipToState(e.target.value)}
                className="border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ship_to_postal_code" className="text-indigo-700">Postal Code</Label>
              <Input
                id="ship_to_postal_code"
                value={shipToPostalCode}
                onChange={(e) => setShipToPostalCode(e.target.value)}
                className="border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ship_to_country_code" className="text-indigo-700">Country Code</Label>
              <Input
                id="ship_to_country_code"
                value={shipToCountryCode}
                onChange={(e) => setShipToCountryCode(e.target.value)}
                className="border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ship_to_residential" className="text-indigo-700">Residential?</Label>
            <Select value={shipToResidential} onValueChange={setShipToResidential}>
              <SelectTrigger className="w-full border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500">
                <SelectValue placeholder="Is this a residential address?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-purple-200 shadow-md">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500">
          <CardTitle className="text-white text-2xl">Ship From</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ship_from_name" className="text-purple-700">Name</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-purple-300 bg-purple-50 text-purple-500">
                  <User className="h-5 w-5" />
                </span>
                <Input
                  id="ship_from_name"
                  value={shipFromName}
                  onChange={(e) => setShipFromName(e.target.value)}
                  className="rounded-l-none border-purple-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ship_from_company" className="text-purple-700">Company Name</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-purple-300 bg-purple-50 text-purple-500">
                  <Building className="h-5 w-5" />
                </span>
                <Input
                  id="ship_from_company"
                  value={shipFromCompany}
                  onChange={(e) => setShipFromCompany(e.target.value)}
                  className="rounded-l-none border-purple-300 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ship_from_phone" className="text-purple-700">Phone</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-purple-300 bg-purple-50 text-purple-500">
                <Phone className="h-5 w-5" />
              </span>
              <Input
                id="ship_from_phone"
                value={shipFromPhone}
                onChange={(e) => setShipFromPhone(e.target.value)}
                className="rounded-l-none border-purple-300 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ship_from_address" className="text-purple-700">Address</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-purple-300 bg-purple-50 text-purple-500">
                <MapPin className="h-5 w-5" />
              </span>
              <Input
                id="ship_from_address"
                value={shipFromAddress}
                onChange={(e) => setShipFromAddress(e.target.value)}
                className="rounded-l-none border-purple-300 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ship_from_city" className="text-purple-700">City</Label>
              <Input
                id="ship_from_city"
                value={shipFromCity}
                onChange={(e) => setShipFromCity(e.target.value)}
                className="border-purple-300 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ship_from_state" className="text-purple-700">State</Label>
              <Input
                id="ship_from_state"
                value={shipFromState}
                onChange={(e) => setShipFromState(e.target.value)}
                className="border-purple-300 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ship_from_postal_code" className="text-purple-700">Postal Code</Label>
              <Input
                id="ship_from_postal_code"
                value={shipFromPostalCode}
                onChange={(e) => setShipFromPostalCode(e.target.value)}
                className="border-purple-300 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ship_from_country_code" className="text-purple-700">Country Code</Label>
              <Input
                id="ship_from_country_code"
                value={shipFromCountryCode}
                onChange={(e) => setShipFromCountryCode(e.target.value)}
                className="border-purple-300 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="ship_from_residential" className="text-purple-700">Residential?</Label>
            <Select value={shipFromResidential} onValueChange={setShipFromResidential}>
              <SelectTrigger className="w-full border-purple-300 focus:ring-purple-500 focus:border-purple-500">
                <SelectValue placeholder="Is this a residential address?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-teal-200 shadow-md">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-green-500">
          <CardTitle className="text-white text-2xl">Package Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weight" className="text-teal-700">Weight (ounce)</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-teal-300 bg-teal-50 text-teal-500">
                  <Weight className="h-5 w-5" />
                </span>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="rounded-l-none border-teal-300 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height" className="text-teal-700">Height (inch)</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-teal-300 bg-teal-50 text-teal-500">
                  <Ruler className="h-5 w-5" />
                </span>
                <Input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="rounded-l-none border-teal-300 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="width" className="text-teal-700">Width (inch)</Label>
              <Input
                id="width"
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="border-teal-300 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="length" className="text-teal-700">Length (inch)</Label>
              <Input
                id="length"
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="border-teal-300 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        Submit Shipment
      </Button>
    </form>
  )
}

