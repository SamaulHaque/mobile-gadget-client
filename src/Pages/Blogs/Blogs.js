import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p> <b>URL: </b> Keeping such data in the URL allows users to share deep links with others.It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc.</p> <br />

                    <p><b>Web Storage</b> The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.</p> <br />

                    <p><b>Local State</b> The third option is to use store state locally. It is useful when one component needs the state.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?                </div>
                <div className="collapse-content">
                    <p>
                        Prototypal inheritance
                        In programming, we often want to take something and extend it.For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>
                        <b>Unit Test: </b> Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p> <br />

                    <p> <b>Why should write: </b>
                        Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                        It simplifies the debugging process.
                        Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                        Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                        Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                    </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p><b>Angular, </b> developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                    </p> <br />
                    <p><b>Vue, </b>
                     also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
                    </p><br />
                    <p><b>React, </b>
                    developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;