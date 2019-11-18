import {
    Hero,
    Section,
    Steps,
    Feature,
    Logo,
    Button,
    Provider,
    Code,
    FeatureList,
    Head, SubHead, Line, SignupForm
} from 'react-landing-page-components'
import React from 'react'
import { H1, Image, Text, Box } from 'hybrid-components'
import { Archive, Airplay } from 'styled-icons/feather'


const MAILCHIMP_URL = ''


const App = () => {
    return (
        <Provider color='white' gradients={['#23282E', '#23282E']}>
            <Hero>
                <Logo width={['100%', null, '200px']} src={''} />
                <Head fontSize='60px'>Mongomery</Head>
                <SubHead>MongoDb native MAC and IOS client</SubHead>
                <SignupForm action={MAILCHIMP_URL}/>
                {/* <Button>Get Started</Button> */}
            </Hero>
            <Line/>
            <Section>
                <img src={''} width='800px'/>
            </Section>
            <Section>
                <Head>Cose</Head>
                <SubHead>The generated queries are super optimized. The generated queries are super optimized</SubHead>
                <FeatureList>
                    <FeatureList.Feature
                        icon={<Archive width='90px' />}
                        title='Native speed, lightweicht memory usage'
                        description='easy'
                    />
                    <FeatureList.Feature
                        icon={<Airplay width='90px' />}
                        title='Easy scroll'
                        description='prima cosa'
                    />
                    
                </FeatureList>
            </Section>
            
            <Section>
                <Head>Features</Head>
                <Feature
                    title='model'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    image={
                        // <img src='https://bemuse.ninja/project/img/screenshots/mode-selection.jpg' />
                        <Code light language='yaml' code={''} />
                    }
                />
                <Feature
                    right
                    title='model'
                    description={`
                    Concerto lets you model the data used in your templates in a flexible and expressive way. 
                    Models can be written in a modular and portable way so they can be reused in a variety of contracts.
                    `}
                    // image={<img  src='https://developer.cohesity.com/img/python.png'/>}
                    image={<Airplay />}
                />
            </Section>
        </Provider>
    )
}

export default App

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}
