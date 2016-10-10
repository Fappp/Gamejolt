angular.module( 'App.Views' ).config( function( $stateProvider )
{
	$stateProvider.state( 'forums.channels.view', {
		abstract: true,
		controller: 'Forums.Channels.ViewCtrl',
		controllerAs: 'viewCtrl',
		templateUrl: '/app/views/forums/channels/view/view.html',
	} );
} );
