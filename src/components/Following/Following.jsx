import React, { useState } from 'react';
import './Following.css'

const Following = () => {
    const [count, setCount] = useState('');
    return (
        <div className='main-following-container1'>
            <div className='main-following-container2'>
                <div className='main-following-container3'>
                    <h2 className='block-following-h2'>Here you will see new posts from people that you follow</h2>
                    <p className='block-following-p'>Discover stashers to follow based on your interests.</p>
                    <p className='block-following-p2'>👇</p>
                </div>
                <div className='main-following-container4'>
                    {/*  */}
                    <div className='main-following-container5'>
                        <img className='block-following-img' src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2F172994-1621876856.jpeg&w=3840&q=75" alt="mamed" />
                        <div className='main-following-container6'>
                            <p className='block-following-p3'>@mortifer</p>
                            <p className='block-following-p4'>Tejash Vhavle</p>
                        </div>
                        <div className='main-following-container7'>
                            <button onClick={() => setCount(count + 'Unfollow')} className='block-following-button'>Follow</button>
                        </div>
                    </div>
                    <div className='main-following-container8'>
                        <p className='block-following-p5'>We're all alone in this universe, helpless and worthless."..... atleast that's what we all think but time and time It's been proven that knowledge and like minded people are there all around us and we just need to open up our eyes to take a look around</p>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className='main-following-container5'>
                        <img className='block-following-img' src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2Fcorys_clair.png&w=3840&q=75" alt="mamed" />
                        <div className='main-following-container6'>
                            <p className='block-following-p3'>@corys_clair</p>
                            <p className='block-following-p4'>Cory Sinclair</p>
                        </div>
                        <div className='main-following-container7'>
                            <button className='block-following-button'>Follow</button>
                        </div>
                    </div>
                    <div className='main-following-container9'>
                        <p className='block-following-p5'>Coder. Husband. Father of 2. Believer in Christ!</p>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className='main-following-container5'>
                        <img className='block-following-img' src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2Frylee_h232.png&w=3840&q=75" alt="mamed" />
                        <div className='main-following-container6'>
                            <p className='block-following-p3'>@rylee_h</p>
                            <p className='block-following-p4'>Rylee</p>
                        </div>
                        <div className='main-following-container7'>
                            <button className='block-following-button'>Follow</button>
                        </div>
                    </div>
                    <div className='main-following-container9'>
                        <p className='block-following-p5'>1% better every day, gets you 1000% better very soon.</p>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className='main-following-container5'>
                        <img className='block-following-img' src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2Fgriq512.png&w=3840&q=75" alt="mamed" />
                        <div className='main-following-container6'>
                            <p className='block-following-p3'>@griq</p>
                            <p className='block-following-p4'>Griffin Q.</p>
                        </div>
                        <div className='main-following-container7'>
                            <button className='block-following-button'>Follow</button>
                        </div>
                    </div>
                    <div className='main-following-container9'>
                        <p className='block-following-p5'>TEAM = (T)ogether (E)veryone (A)chieves (M)ore</p>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className='main-following-container5'>
                        <img className='block-following-img' src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2F1252976-1649441169.jpeg&w=3840&q=75" alt="mamed" />
                        <div className='main-following-container6'>
                            <p className='block-following-p3'>@kyle_zamuel</p>
                            <p className='block-following-p4'>Kyle Zamuel</p>
                        </div>
                        <div className='main-following-container7'>
                            <button className='block-following-button'>Follow</button>
                        </div>
                    </div>
                    <div className='main-following-container9'>
                        <p className='block-following-p5'>Learning + Focus + Application = Success Medical Technology student from the Philippines</p>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className='main-following-container5'>
                        <img className='block-following-img' src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2F1327120-1630043644.jpeg&w=3840&q=75" alt="mamed" />
                        <div className='main-following-container6'>
                            <p className='block-following-p3'>@subbujunior</p>
                            <p className='block-following-p4'>Anand Iyer</p>
                        </div>
                        <div className='main-following-container7'>
                            <button className='block-following-button'>Follow</button>
                        </div>
                    </div>
                    <div className='main-following-container9'>
                        <p className='block-following-p5'>Everything here is going to be straight out of my mind.</p>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className='main-following-container5'>
                        <img className='block-following-img' src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2F1383601-1634914885.jpeg&w=3840&q=75" alt="mamed" />
                        <div className='main-following-container6'>
                            <p className='block-following-p3'>@pixe_blog</p>
                            <p className='block-following-p4'>Pixe Blog</p>
                        </div>
                        <div className='main-following-container7'>
                            <button className='block-following-button'>Follow</button>
                        </div>
                    </div>
                    <div className='main-following-container9'>
                        <p className='block-following-p5'>#book #quotes #photography #loveThat's my life......</p>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className='main-following-container5'>
                        <img className='block-following-img' src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2F1590291-1648972818.jpeg&w=3840&q=75" alt="mamed" />
                        <div className='main-following-container6'>
                            <p className='block-following-p3'>@akshxt_</p>
                            <p className='block-following-p4'>Akshat Shrivastava</p>
                        </div>
                        <div className='main-following-container7'>
                            <button className='block-following-button'>Follow</button>
                        </div>
                    </div>
                    <div className='main-following-container9'>
                        <p className='block-following-p5'>I'm tired of livin' with demons 'cause they always inviting more - J.cole </p>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className='main-following-container5'>
                        <img className='block-following-img' src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2Fhjoy2020.png&w=3840&q=75" alt="mamed" />
                        <div className='main-following-container6'>
                            <p className='block-following-p3'>@hjoy</p>
                            <p className='block-following-p4'>Hamish Joy</p>
                        </div>
                        <div className='main-following-container7'>
                            <button className='block-following-button'>Follow</button>
                        </div>
                    </div>
                    <div className='main-following-container9'>
                        <p className='block-following-p5'>Love all, trust a few, do wrong to none.</p>
                    </div>
                    {/*  */}
                </div>
                <div className='main-following-container10'>
                    <div className='main-following-container11'>
                        <img src="https://static.deepstash.com/illustrations/hand_phone_dark.svg" alt="" />
                        <p>Opening the app you'll see <b>the feed</b>: a list of ideas that match your interests or come from stashers you follow.</p>
                        <br />
                        <br />
                        <p>Tapping on any idea will show you all the related ideas curated by the same author from that article or book.</p>
                    </div>
                    <div className='main-following-container11'>
                        <img src="https://static.deepstash.com/illustrations/book_seeds_dark.svg" alt="" />
                        <p>Building the good habit of reading every day and constantly nurturing your mind is easy with Deepstash.</p>
                        <br />
                        <br />
                        <p>You can <b>set a daily reading goal</b>  and maintain a <b>reading streak</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Following;