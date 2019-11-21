import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

const ActorList = props => {
    return (
        <div>
            <Grid stackable column={3}>
                {
                    props.actors.map((actor, key) => (
                        <Grid.Column key={key} className="clumn">
                            <Card>
                                <Card
                                    image={actor.photo}
                                    header={actor.name}
                                    extra={actor.description}
                                />
                            </Card>
                        </Grid.Column>
                    ))

                }
            </Grid>
        </div>
    )
}

export default ActorList