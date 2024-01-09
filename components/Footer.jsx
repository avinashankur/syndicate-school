import React from 'react'
import Link from 'next/link'
import ButtonPrimary from './ButtonPrimary'


const footer = () => {
    return (
        <>
            <div className='footerBox'>
                <div className="footerText">
                    <div className="footerText1">
                        <h3>Syndicate National School</h3>
                        <div className="footerWrap">
                            <p className='footerSchoolAbout'>Syndicate National School, established by visionary leader Jesus Singh is the epitome of educational excellence. With over three decades of nurturing young minds, the school excels in providing a holistic learning experience. The state-of-the-art facilities include a well-equipped sports complex, modern canteen, nursery to 12th-grade classes, air-conditioned classrooms, and subject-specific labs </p>

                            <p>Phone : +91 01586 4431 5465</p>
                            <p>Mail : syndicatenational@info.com</p>
                            <p>Address : Dholakpur, New Delhi, 400154</p>
                        </div>
                    </div>
                    <div className="footerText2">
                        <h3>Quick Links</h3>
                        <div className="footerWrap">
                            <ul>
                                <li><Link href='/' className='a'> &#x276F; Home</Link></li>
                                <li><Link href='/search-tc' className='a'> &#x276F; Search TC</Link></li>
                                <li><Link href='/' className='a'> &#x276F; CBSE MD</Link></li>
                                <li><Link href='/academics' className='a'> &#x276F; Academics</Link></li>
                                <li><Link href='/campus' className='a'> &#x276F; Campus</Link></li>
                                <li><Link href='/beyond-academics' className='a'> &#x276F; Beyond Academics</Link></li>
                                <li><Link href='/events' className='a'> &#x276F; Events</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerText3">
                        <h3>Branches</h3>
                        <div className="footerWrap">
                            <ul>
                                <li><Link href='/' className='a'> &#x276F; Syndicate Mumbai</Link></li>
                                <li><Link href='/' className='a'> &#x276F; Syndicate Goa</Link></li>
                                <li><Link href='/' className='a'> &#x276F; Syndicate Delhi</Link></li>
                                <li><Link href='/' className='a'> &#x276F; Syndicate Prayagraj</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerText4">
                        <h3>Newsletter</h3>
                        <div className="footerWrap">
                            <p>Subscribe to our Newsltter to get the latest news from the school!</p>
                            <div className="footerInput">
                                <input type="email" placeholder='Enter Your Email' />
                                <ButtonPrimary title = "Subscribe"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <h4>Copyright 2023-2024 <Link href='/'>Syndicate National School.</Link> All rights reserved | <Link href="/terms">Terms & Conditions </Link>| Developed By <Link href='https://avinashankur.github.io/portfolio' target="_blank" rel='noopener'>Avinash</Link></h4>
                </div>
            </div>
        </>
    )
}

export default footer