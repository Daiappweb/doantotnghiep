import React, { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select, TextField,Button } from "@material-ui/core";
import axios from "axios";
import { faClose, faEdit, faPlusSquare, faTrash, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function OrderView(props) {
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [name,setName] = useState('');
    const [color,setColor] = useState('');
    const [size,setSize] = useState('');
    const [price,setPrice] = useState();

    const jsondata = {
        "Products":[
            {
                "pname":name,
                "pcolor":color,
                "psize":size,
                "ptype":type,
                "pbrand":brand,
                "pprice":price
            }
        ]
    }

    const handleChange = (event) => {
        setBrand(event.target.value);
    };
    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeColor = (event) => {
        setColor(event.target.value);
    };
    const handleChangeSize = (event) => {
        setSize(event.target.value);
    };
    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    };
    function addProduct(){
        axios.post('http://localhost:8063/api/products', {
           
            pname: name,
            pcolor: color,
            psize: size,
            pprice: price,
            ptid: type,
            bid: brand,
            
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    const { brands, producttypes,senddata } = props
    console.log("types === ", type);
    console.log("brand === ", brand);
    console.log("name === ",name)
    return (
        <div>
            <TextField
                id="outlined-name"
                label="Name"
                value={name}
                onChange={handleChangeName}
            />
              <TextField
                id="outlined-name"
                label="Color"
                value={color}
                onChange={handleChangeColor}
            />
              <TextField
                id="outlined-name"
                label="Size"
                value={size}
                onChange={handleChangeSize}
            />
              <TextField
                id="outlined-name"
                label="Price"
                value={price}
                onChange={handleChangePrice}
            />

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Brand</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={brand}
                    label="Brands"
                    onChange={handleChange}
                >
                    {brands && brands.map((item, index) => (
                        <MenuItem value={item.bid}>{item.bname}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Type</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={type}
                    label="Type"
                    onChange={handleChangeType}
                >
                    {producttypes && producttypes.map((item, index) => (
                        <MenuItem value={item.ptid}>{item.ptname}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="contained"  onClick={addProduct}>Add product</Button>
            <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Đơn giá</th>
                <th scope="col">Thành tiền</th>
                <th scope="col">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <th scope="row">1</th>
                <td>Đại</td>
                <td>2</td>
                <td>200000</td>
                <td>400000</td>
                <td style={{ cursor: "pointer" }}>
                  <FontAwesomeIcon
                    style={{ marginLeft: 20 }}
                    // onClick={(id) => handleDeleteOrderDetail(id)}
                    icon={faTrash}
                  />
                </td>
              </tr> */}
              
            </tbody>
          </table>
        </div>

    )
}
export default OrderView;