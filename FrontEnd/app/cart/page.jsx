'use client'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import './cart.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



export default function QuantityEdit() {
    const [value1, setValue1] = React.useState(3);
    const [value2, setValue2] = React.useState(3);
    const [value3, setValue3] = React.useState(3);
    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol size="12">
                        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="p-0">
                                <MDBRow className="g-0">
                                    <MDBCol lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                                    Your Meal
                                                </MDBTypography>
                                                <MDBTypography className="mb-0 text-muted">
                                                    3 items
                                                </MDBTypography>
                                            </div>

                                            <hr className="my-4" />

                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src='https://www.cookingclassy.com/wp-content/uploads/2022/02/pesto-pasta-1.jpg'
                                                        fluid className="rounded-3" alt="Cotton T-shirt" />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography tag="h6" className="text-muted">
                                                        Ortega
                                                    </MDBTypography>
                                                    <MDBTypography tag="h6" className="text-black mb-0">
                                                        Pesto Pasta w/ Chicken
                                                    </MDBTypography>

                                                    <Rating
                                                        className="mt-4"
                                                        name="simple-controlled"
                                                        value={value1}
                                                        onChange={(event, newValue) => {
                                                            setValue1(newValue);
                                                        }}
                                                    />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="minus" />
                                                    </MDBBtn>

                                                    <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="plus" />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="text-end">

                                                </MDBCol>
                                                <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                    <a href="#!" className="text-muted">
                                                        <MDBIcon fas icon="times" />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>

                                            <hr className="my-4" />

                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src="https://i.pinimg.com/originals/57/48/f6/5748f66613de9ac009fd9337e99b6e6b.jpg"
                                                        fluid className="rounded-3" alt="Cotton T-shirt" />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography tag="h6" className="text-muted">
                                                        Portola
                                                    </MDBTypography>
                                                    <MDBTypography tag="h6" className="text-black mb-0">
                                                        Pepperoni Pizza
                                                    </MDBTypography>
                                                    <Rating
                                                        className="mt-4"
                                                        name="simple-controlled"
                                                        value={value2}
                                                        onChange={(event, newValue) => {
                                                            setValue2(newValue);
                                                        }}
                                                    />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="minus" />
                                                    </MDBBtn>

                                                    <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="plus" />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="text-end">

                                                </MDBCol>
                                                <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                    <a href="#!" className="text-muted">
                                                        <MDBIcon fas icon="times" />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>

                                            <hr className="my-4" />

                                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage
                                                        src="https://assets.bonappetit.com/photos/6437281f4c497b684ece7ff3/1:1/w_2560%2Cc_limit/Recipe_Beauty_Gingery_Chicken_Ramen_0350.jpg"
                                                        fluid className="rounded-3" alt="Cotton T-shirt" />
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <MDBTypography tag="h6" className="text-muted">
                                                        De La Guerra
                                                    </MDBTypography>
                                                    <MDBTypography tag="h6" className="text-black mb-0">
                                                        Ramen
                                                    </MDBTypography>
                                                    <Rating
                                                        className="mt-4"
                                                        name="simple-controlled"
                                                        value={value3}
                                                        onChange={(event, newValue) => {
                                                            setValue3(newValue);
                                                        }}
                                                    />

                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="minus" />
                                                    </MDBBtn>

                                                    <MDBInput type="number" min="0" defaultValue={1} size="sm" />

                                                    <MDBBtn color="link" className="px-2">
                                                        <MDBIcon fas icon="plus" />
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="text-end">

                                                </MDBCol>
                                                <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                    <a href="#!" className="text-muted">
                                                        <MDBIcon fas icon="times" />
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>

                                            <hr className="my-4" />

                                            <div className="pt-5">
                                                <MDBTypography tag="h6" className="mb-0">
                                                    <MDBCardText tag="a" href="javascript:history.back()" className="text-body">
                                                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back

                                                    </MDBCardText>
                                                </MDBTypography>
                                            </div>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="4" className="bg-grey">
                                        <div className="p-5">
                                            <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                                                Summary
                                            </MDBTypography>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    items 3
                                                </MDBTypography>
                                            </div>

                                            <MDBTypography tag="h5" className="text-uppercase mb-3" style={{ fontSize: "18px", fontWeight: 700 }}>
                                                Nutrition:
                                            </MDBTypography>
                                            <ul className="pl-0">
                                                <li>Protein: 76g</li>
                                                <li>Fat: 124g</li>
                                                <li>Sugar: 37g</li>
                                                <li>Carbs: 140g</li>
                                            </ul>

                                            <div className="mb-4 pb-2">

                                            </div>



                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    Total Calories:
                                                </MDBTypography>
                                                <MDBTypography tag="h5">1434 kcals</MDBTypography>
                                            </div>

                                            <MDBBtn color="dark" block size="lg">
                                                Clear Cart
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}