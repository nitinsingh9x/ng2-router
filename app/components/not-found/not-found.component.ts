import { Component } from '@angular/core';

@Component({
    selector:'not-found',
    template:`
        <div class="alert alert-danger">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
    <strong>404!</strong> Page Not Found ...
</div>  
    `
})
export class NotFoundComponent{}